import React from "react";
import { Lobby } from "./components/Lobby"
import { Waiter } from "./components/Waiter"
import { Kitchen } from "./components/Kitchen"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';



function App() {
  return (
    <Router>
      <div className="container">
      
      <Switch>
        <Route path='/' exact>
          <Lobby />
        </Route>
        <Route path='/waiter'>
          <Waiter />
        </Route>
        <Route path='/kitchen'>
          <Kitchen/>
        </Route>
      </Switch>
      </div>
    </Router>
    
  );
}

export default App;
