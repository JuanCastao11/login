import User from '../models/user.models.js';
import bcrypt from 'bcryptjs';
import { createTokenAccess } from '../libs/jwt.js';

export const register = async (req, res) => {
    const {email, password, username} = req.body;

    try {

        const userFound = await User.findOne({email})
        if(userFound) return res.status(400).json(["the email is already in use"]);

        const passwordHash = await bcrypt.hash(password, 10)

        const newUser = new User({
            username,
            email,
            password: passwordHash
        });

        const userSaved = await newUser.save();
        const token = await createTokenAccess({ id: userSaved._id })
        res.cookie('token', token)
        res.status(201).json({
            id: userSaved._id,
            username: userSaved.username,
            email: userSaved.email
        })

    } catch (error) {
        res.status(500).json({ massage: error.massage })
    }
};

export const login = async (req, res) => {
    const {email, password} = req.body;

    try {
        const userFound = await User.findOne({ email });
        if(!userFound) return res.status(400).json({ message: "User not Found" });

        const isMatch = await bcrypt.compare(password, userFound.password);
        if(!isMatch)
        return res.status(400).json({ massage: "Error in Credentials" });

        const token = await createTokenAccess({ id: userFound._id })
        res.cookie('token', token)
        res.status(201).json({
            id: userFound._id,
            username: userFound.username,
            email: userFound.email
        });

    } catch (error) {
        res.status(500).json({ massage: error.massage })
    }
};

export const logout = (req, res) => {
    res.cookie('token', '', {
        expires : new Date(0),
    });
    return res.sendStatus(200);
}

export const profile = async (req, res) => {
    
    const userFound = await User.findById(req.user.id);
    if(!userFound) return res.status(400).json({ massage : "User not Found" });

    res.status(201).json({
        id: userFound._id,
        username: userFound.username,
        email: userFound.email        
    });
}