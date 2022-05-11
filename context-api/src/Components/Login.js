import React,{useState,useContext} from "react";
import { LoginContext } from "../Contexts/LoginContext";

export const Login=(()=>{
    const {setUserName,setShowProfile}=useContext(LoginContext)
    return(
        <div className="login">
            <br />
            <input type="text" placeholder="Enter username..." onChange={(e)=>setUserName(e.target.value)} />
                <br />
                <br />
            <input type="password" placeholder="Enter password..." />
            <br />
            <br />
            <button onClick={()=>setShowProfile(false)}>LOGIN</button>
        </div>
    )
})