import React, { ReactElement } from 'react';
import '../style/App.css';
import {
  BrowserRouter as Router, Link, Route, Switch,
} from 'react-router-dom';
import BlockChain from './BlockChain';
import SignIn from './SignIn';
import SignUp from './SignUp';
import Home from './Home';
import About from './About';
import Dashboard from './Dashboard';

function App() : ReactElement {
  return (
  <div id="App-Body">
    <Router>
      <h1> Links </h1>
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
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/dashboard" component={Dashboard}/>
        <Route path="/blockchain" component={BlockChain}/>
        <Route path="/signup" component={SignUp} />
        <Route path="/signin" component={SignIn}/>
      </Switch>
    </div>
  </Router>
  </div>
  );
}
export default App;
