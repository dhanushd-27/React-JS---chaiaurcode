import React, { useContext } from "react";
import UserContext from "../context/UserContext.js";

export default function (){
    const { user } = useContext(UserContext);
    
    if(!user) return <div>Not Login yet</div>

    return <div>Profile: {user.username}</div>
}