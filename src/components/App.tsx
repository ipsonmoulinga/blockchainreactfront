import React, { ReactElement } from 'react';
import '../style/App.css';
import {
  BrowserRouter as Router, Link, Route, Switch,
} from 'react-router-dom';
import BlockChain from './BlockChain';
import Register from './Login/Register';
import Login from './Login/Login';
// import Login from './Login/Login';
function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}
function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
}
function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

function App() : ReactElement {
  return (
    <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/login">login</Link>
        </li>
        <li>
          <Link to="/Register">Register</Link>
        </li>
        <li>
          <Link to="/blockchain">blockchain</Link>
        </li>
      </ul>
      <hr />

      {/*
        A <Switch> looks through all its children <Route>
        elements and renders the first one whose path
        matches the current URL. Use a <Switch> any time
        you have multiple routes, but you want only one
        of them to render at a time
      */}
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/blockchain">
          <BlockChain />
        </Route>
      </Switch>
    </div>
  </Router>
  );
}

// You can think of these components as "pages"
// in your app.

export default App;
