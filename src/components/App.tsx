import React, { ReactElement } from 'react';
import '../style/App.css';
import {
  BrowserRouter as Router, Link, Route, Switch,
} from 'react-router-dom';
import BlockChain from './BlockChain';
import SignIn from './SignIn';
import SignUp from './SignUp';

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
  <div id="App-Body">
    <Router>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/blockchain">blockchain</Link>
        </li>
        <li>
          <Link to="/signup">Sign-up Form</Link>
        </li>
        <li>
          <Link to="/signin">Sign-in Form</Link>
        </li>
      </ul>
      <hr />
    <div className='secondContainer'>
      <Switch >
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route path="/blockchain">
          <BlockChain />
        </Route>
        <Route path="/signup" component={SignUp} />
        <Route path="/signin" component={SignIn}/>
      </Switch>
    </div>
  </Router>
  </div>
  );
}

// You can think of these components as "pages"
// in your app.

export default App;
