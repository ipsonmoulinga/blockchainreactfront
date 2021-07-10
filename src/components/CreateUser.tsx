import { Button, Grid } from '@material-ui/core';
import React, { ReactElement } from 'react';
import {
  // BrowserRouter as Router,
  Link,
  // Route, Switch,
} from 'react-router-dom';
// import DisplayUser from './DisplayUser';

const CreateUser = () : ReactElement => {
  const [email, setEmail] = React.useState('');
  const handleSubmit = (
    event: { preventDefault: () => void; },
  ) => {
    event.preventDefault();
  };
  return (
    <Grid>
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
              <Button
                to={`/usercreated/${email}`}
                component={Link}>
                  Submit
              </Button>
            </form>
    </Grid>
  );
};
export default CreateUser;

// const CreateUser = () : ReactElement => (<h1>Create user</h1>);
// export default CreateUser;
