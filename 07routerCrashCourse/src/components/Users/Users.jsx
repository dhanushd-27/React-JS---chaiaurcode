import React from "react";
import { useParams } from "react-router-dom";

export default function Users(){
    const { userid } = useParams();

    return(
        <h1 className="text-center text-xl">Users: { userid }</h1>
    )
}