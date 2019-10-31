import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
// import Contact from "./components/Contact";
import Nav from "./components/Nav";
import { UserProvider } from "./components/UserContext";
import Login from "./components/login";
import Register from "./components/register";

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="App">
        <Router>
          <Nav />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
          </Switch>
        </Router>
        {/* <PostList /> */}
      </div>
    );
  }
}

export default App;
