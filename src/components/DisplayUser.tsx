import { Button, Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
import React, { ReactElement, useEffect, useState } from 'react';
import { IDatabaseOperationStatus } from '../model/BlockChain';
import { createUser } from '../service/api';

const DisplayUser = (props:{userName:string}):ReactElement => {
  const [ResponseToDisplay, setResponseToDisplay] = useState<string>('');
  const [button, setbutton] = useState<boolean>(false);
  const setResponseInTheState = async () => {
    const response = await createUser(props.userName);
    setResponseToDisplay((
      (response === IDatabaseOperationStatus.success)
        ? `User with public key: ${props.userName} has been successfully created`
        : `Failure to create User with public key: ${props.userName}, please retry by clicking on the link below`));
    setbutton((
      (response === IDatabaseOperationStatus.success)
    ));
  };
  useEffect(() => {
    setResponseInTheState();
  }, []);
  const DisplayAllUsersButtonStyle = {
    display: button ? 'block' : 'none',
    widtn: 'maxContent',
    color: 'yellowgreen',
    fontWeight: 'bold' as const,
    backgroundColor: 'transparent',
  };
  const CreateNewUserButtonStyle = {
    display: (!button) ? 'block' : 'none',
    color: 'redorange',
    fontWeight: 'bold' as const,
    backgroundColor: 'transparent',
  };
  return (
    <Grid>
      <div>{ResponseToDisplay}</div>
      <Button
        style={DisplayAllUsersButtonStyle}
        component={Link}
        to="/displayallusers"
      >
        Click here to see All Users
      </Button>
      <Button
        style={CreateNewUserButtonStyle}
        component={Link}
        to="/createuser"
      >
        Create new user
      </Button>
    </Grid>
  );
};
export default DisplayUser;
