import React, { useState } from "react";
import UserContext from "./UserContext.js";

const UserContextProvider = ({children}) => {
    const [user, setUser] = useState(null)

    return(
        <UserContext.Provider>
        {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider;