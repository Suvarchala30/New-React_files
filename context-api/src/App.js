import './App.css';
import React , {useState} from 'react';
import {LoginContext} from "./Contexts/LoginContext"
import { Login } from './Components/Login';
import { Profile } from './Components/Profile';
function App() {
  const [showProfile,setShowProfile]=useState(true)
  const [username,setUserName]=useState("")
  return (
    <div className="App">
      <LoginContext.Provider value={{setShowProfile,username,setUserName}}>
        {showProfile? <Login /> : <Profile />}
      </LoginContext.Provider>
    </div>
  );
}

export default App;
