import React, { ReactElement } from 'react';
import {
  BrowserRouter as Router,
  Link,
  Route, Switch,
} from 'react-router-dom';
import DisplayUser from './DisplayUser';

const CreateUser = () : ReactElement => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleSubmit = (
    event: { preventDefault: () => void; },
  ) => {
    event.preventDefault();
  };
  return (
    <Router>
      <Switch >
        <Route exact path="/">
          <div>
            <form
              onSubmit={handleSubmit}
            >
              <h1>Create New User</h1>
              <label>
                Email:
                <input
                  name="email"
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  required />
              </label>
              <label>
                Password:
                <input
                  name="password"
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                  required />
              </label>
            </form>
            <Link to="/display">
              <button type='submit'>
                  Submit
              </button>
            </Link>
    </div>
          </Route>
          <Route path="/display">
            <DisplayUser userName={`Email:${email} et ${password}`}/>
          </Route>
        </Switch>
    </Router>
  );
};
export default CreateUser;
