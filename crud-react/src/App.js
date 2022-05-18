import {BrowserRouter,Route,Routes} from "react-router-dom"
import './App.css';
import Create from "./Components/Create.js"

function App() {
  return (
    <div className="App">
      <div className="heading">
      React CRUD Operations
      </div>
      <Create />
    </div>
  );
}

export default App;
