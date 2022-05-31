import React from "react";
import {
  BrowserRouter as Router,
  // NavLink,
  Route,
  Switch
} from "react-router-dom";
import Protected from "./auth/Protected";
import IfLoggedin from "./auth/IfLoggedin";

import Home from "./component/Home";
import ItemsList from "./component/Items/List";
import ItemsForm from "./component/Items/Form";
import About from "./component/About";
import Login from "./component/Login";
import Logout from "./component/Logout";
import NotFound from "./component/NotFound";

// const links = [
//   { path: "/", text: "Home" },
//   { path: "/orders", text: "Orders" },
//   { path: "/shops", text: "Shops" }
// ];

export default function App() {
  
  // const setLocalStorage = () => localStorage.setItem("token", "test");
  // const resetLocalStorage = () => localStorage.removeItem("token");

  return (
    <div className="App">
      
      {/* <h2>
        <button type="button" onClick={setLocalStorage}>
          Set Local Storage Value
        </button>
        <button type="button" onClick={resetLocalStorage}>
          Clear Local Storage Value
        </button>
      </h2> */}

      <Router>
        {/* {links.map(({ path, text }) => (
          <NavLink key={path} className="navlink" to={path}>
            {text}
          </NavLink>
        ))} */}
        <Switch>
          {/* <Route path="/login" component={Login} exact/> */}
          <IfLoggedin path="/login" component={Login} exact/>
          <Protected path="/" component={Home} exact/>
          <Protected path="/item/list" component={ItemsList} exact/>
          <Protected path="/item/form" component={ItemsForm} exact/>
          <Protected path="/about" component={About} exact/>
          <Route path="/logout" component={Logout} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
}
