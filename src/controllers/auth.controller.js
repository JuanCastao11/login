import User from '../models/user.models.js';
import bcrypt from 'bcryptjs';
import { createTokenAccess } from '../libs/jwt.js';



export const register = async (req, res) => {
    const {email, password, username} = req.body;

  //  console.log(email, password, username);
  //  res.send('Registrado');
  try{
    const passwordHash = await bcrypt.hash(password,10)
    const newUser = new User({
        username,
        email,
        password:passwordHash

    });

    const userSaved = await newUser.save();
    const token = await createTokenAcces({ id: userSaved.id});
    res.cookie('token', token)
    res.status(201).json({
        id: userSaved.id,
        username: userSaved.username,
        email: userSaved.email
    })
  }catch (error){
    res.status(500).json({message: error.message});
  }
};

export const login = async (req, res) => {
  const {email, password} = req.body;

//  console.log(email, password, username);
//  res.send('Registrado');

try{
  const userFound = await User.findone({ email });
if(!userFound) return res.status(400).json({ message : "User not found" });


const isMatch = await bcrypt.compare(password,userFound.password);
if(!isMatch)
return res.status(400).json({ message : "Error in credentials" });

 
  const token = await createTokenAcces({ id: userFound.id});
  res.cookie('token', token)
  res.status(201).json({
      id: userFound.id,
      username: userFound.username,
      email: userFound.email
  })
}catch (error){
  res.status(500).json({message: error.message});
}
};
