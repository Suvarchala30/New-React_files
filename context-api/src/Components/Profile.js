import React,{useState,useContext} from "react";
import { LoginContext } from "../Contexts/LoginContext";

export const Profile=(()=>{
    const {username}=useContext(LoginContext)
    return(
        <div className="profile">
            <h2>Profile</h2>
            <h3>Username: {username}</h3>
        </div>
    )
})