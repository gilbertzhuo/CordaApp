import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import "./App.css";
import Navbar from "./component/Navbar";
import Home from "./pages/Home"
import Reward from "./pages/Reward";
import Wallet from "./pages/Wallet";
export default function App (){
  
  return (
  <Router>
        <Navbar/>
        <div>
          <Switch>
            <Route path="/reward">
              <Reward />
            </Route>
            <Route path="/wallet">
              <Wallet />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </div>
    </Router>
  )
}
