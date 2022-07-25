import "./App.css";
import Login from "./views/authentication/Login";
import Registration from "./views/authentication/Registration";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div className="App">
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Registration />
            </Route>

            <Route path="/login">
              <Login />
            </Route>
          </Switch>
        </div>
      </div>
      
    </Router>
  );
};

export default App;
