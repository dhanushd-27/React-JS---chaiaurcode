import React, { useContext, useState } from "react";
import UserContext from "../context/UserContext.js";

export default function (){
  const {setUser} = useContext(UserContext);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
      e.preventDefault();
      setUser({username, password});
    }

  return(
    <>
      <h1 className="m-2">Login</h1>
          <input type='text'
          value={ username }
          onChange={(e) => setUsername(e.target.value) }
          placeholder='username'
          className="p-2 m-2"  />
          {" "}
          <input type='text' 
          value={password}
          onChange={(e) => setPassword(e.target.value) }
          placeholder='password' 
          className="p-2 m-2"
          />
          <button onClick={handleSubmit}>Submit</button>
    </>
  )
}