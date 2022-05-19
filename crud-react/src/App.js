import {BrowserRouter,Route,Routes} from "react-router-dom"
import './App.css';
import Create from "./Components/Create.js"
import Read from "./Components/Read";
import Update from "./Components/Update"
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <div className="heading">
      React CRUD Operations
      </div>
      <Routes>
        <Route path="/" element={<Create />}/>
        <Route path="/read" element={<Read />}/>
        <Route path="/update" element={<Update />}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
