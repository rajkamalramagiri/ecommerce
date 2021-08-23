import React, { Component } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "./components/Home";
import Products from "./components/Products";
import Header from "./components/Header";

export class App extends Component {
  render() {
    return (
      <Router>
      <div className='app'>
       <Switch>
       <Route path="/" exact component={Home} />
       <Route path="/products" exact component={Products} />
       
        </Switch>
      </div>
      </Router>
    );
  }
}

export default App;
