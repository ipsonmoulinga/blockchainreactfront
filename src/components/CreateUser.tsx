import React, { ReactElement, useState } from 'react';
import FormData from 'form-data';
import { Button, Grid, Input } from '@material-ui/core';
import {
  // BrowserRouter as Router,
  Link,
  useHistory,
  // Route, Switch,
} from 'react-router-dom';
import axios from 'axios';
// import { createNewUser } from '../service/api';
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

export const CreateNewUser = () : ReactElement => {
  const [email, setEmail] = useState('');
  const history = useHistory();
  const handleSubmit = () => {
    try {
      const host = 'https://wuwoxec28k.execute-api.eu-west-3.amazonaws.com/dev/';
      // const host2 = 'http://localhost:2000/';
      const link = 'createUser';
      const formData = new FormData();
      formData.append('publickey', email);
      axios({
        url: `${host}${link}`,
        method: 'POST',
        data: formData,
        headers: {
          Accept: 'application/json',
          'Content-Type': 'multipart/form-data',
        },
      });
      history.push('/displayallusers');
    } catch (error) {
      console.error(error);
    }
  };
  return (
<form >
    <Input
      type='text'
      name='email'
      onChange={(e) => setEmail(e.target.value)}
      placeholder="email" />
    <Button onClick={handleSubmit}>Submit</Button>
</form>);
};
