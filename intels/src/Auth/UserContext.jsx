import React , {createContext , useState} from "react";


const UserContext  =  createContext();

const UserProvider = ({children}) =>{
    const [user , setUser] = useState(null);

    const loginUser = (userData) =>{
        setUser(userData);
    };

    const logoutUser = () => {
        setUser(null);
      };

    const contextValue = {
        user, 
        loginUser,
        logoutUser,
    };

    return <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>;
}

export  {UserContext, UserProvider}