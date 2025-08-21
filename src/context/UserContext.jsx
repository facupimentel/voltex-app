import { createContext, useContext, useState } from "react";

const UserContext = createContext({user: null, isLoggedIn: false})

export const UserProvider = ({children}) =>{
    const [user, setUser] = useState({name: "Facundo", isLoggedIn: true})

    const login = (userData) => setUser(userData)
    const logout = () => setUser(null)

    return (
      <UserContext.Provider value={{user, login, logout}}>
        {children}
      </UserContext.Provider>
    );
}

export const useUser = ()  => useContext(UserContext)