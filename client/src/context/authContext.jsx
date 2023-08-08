import { createContext, useState,useContext } from "react";

import { registerRequest } from "../api/auth";

export const  AuthContext = createContext();

export const useAuth= () =>{
    const context = useContext(AuthContext);
    if(!context){
        throw new Error("useAuth must be  used within and AuthProvider")
    }
    return context;
}

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isAuthenticathed, setIsAutheticated] = useState(false);
    const [errors, setErrors] = useState([]);

    const signup = async (user) => {
        try{
            const res = await registerRequest(user)
            console.log(res);
            setUser(res.data)
            setIsAutheticated(true);
        } catch (error){
            setErrors(error.response.data)
            console.log(error);

        }
    }

    return(
        <AuthContext.Provider value={{
            signup,
            user,
            isAuthenticathed,
            errors
            }}>
                {children}
            </AuthContext.Provider>
    )
}