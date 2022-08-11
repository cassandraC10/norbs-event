import "./App.css";
import Login from "./views/authentication/Login";
import Registration from "./views/authentication/Registration";
import { Routes, Route} from "react-router-dom";
import Dashboard from "./views/dashboard/Dashboard";

const App = () => {
  return (
    
      <div className="App">
        <Routes>
           <Route path = "/login" element ={<Login />}/>
           <Route path = "/register" element ={<Registration/>}/>
           <Route path = "/dashboard/*" element ={<Dashboard/>}/>
       </Routes>
      </div>

  )
}

export default App;
