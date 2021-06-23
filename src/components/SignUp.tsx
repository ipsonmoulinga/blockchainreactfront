import {
  Grid, Avatar, Button, makeStyles, TextField, IconButton, withStyles, Card,
} from '@material-ui/core';
import '../style/Sign.css';
import '../style/SignUp.css';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import PersonRoundedIcon from '@material-ui/icons/PersonRounded';
import React, { ReactElement, useState } from 'react';
import VisibilityOffOutlinedIcon from '@material-ui/icons/VisibilityOffOutlined';
import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined';
import { Link } from 'react-router-dom';

const CssTextField = withStyles({
  root: {
    '& .MuiInputBase-root': {
      color: 'gray',
    },
  },
})(TextField);

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  large: {
    width: theme.spacing(10),
    height: theme.spacing(10),
  },
}));

const SignUp = () : ReactElement => {
  const classes = useStyles();
  // Add these variables to your component to track the state
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);
  return (
          <Grid id="sign-wrapper">
            <Card id="formContainer">
              <form className='loginRegisterForm'>
              <Grid className="avatarContainer">
                <Avatar className={classes.large}>
                  <PersonRoundedIcon id='avatarIcon' />
                </Avatar>
              </Grid>
              <Grid className="formControlContainer">
                <Grid container className='inputContainer' alignItems="flex-end">
                  <Grid item className='inputIconContainer'>
                    <MailOutlineIcon className='inputIcon'/>
                  </Grid>
                  <Grid item className='inputContainerTextField'>
                    <CssTextField
                      type='text'
                      className='inputTextField'
                      label="Email adress"
                      InputProps={{ disableUnderline: true }}
                      InputLabelProps={{ style: { fontSize: '100%', color: 'gray' } }}/>
                  </Grid>
                </Grid>
                <Grid container className='inputContainer' alignItems="flex-end">
                  <Grid item className='inputIconContainer'>
                    <LockOpenIcon className='inputIcon'/>
                  </Grid>
                  <Grid item className='inputContainerTextField'>
                    <CssTextField
                      type={showPassword ? 'text' : 'password'}
                      className='inputTextField'
                      label="Password "
                      InputProps={{ disableUnderline: true }}
                      InputLabelProps={{ style: { fontSize: '100%', color: 'gray' } }}
                    />
                  </Grid >
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    size='small'
                  >
                    {showPassword
                      ? <VisibilityOutlinedIcon className='inputIcon'/>
                      : <VisibilityOffOutlinedIcon className='inputIcon'/>}
                  </IconButton>
                </Grid>
                <Grid container className='inputContainer' alignItems="flex-end">
                  <Grid item className='inputIconContainer'>
                    <LockOpenIcon className='inputIcon'/>
                  </Grid>
                  <Grid item className='inputContainerTextField'>
                    <CssTextField
                      type="password"
                      className='inputTextField'
                      label="Confirm password"
                      InputProps={{ disableUnderline: true }}
                      InputLabelProps={{ style: { fontSize: '100%', color: 'gray' } }}/>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid container id='submissionButtonContainer'>
                  <Button id="signupButton" type="submit">Sign up</Button>
                </Grid>
                </form>
            </Card>
            <Grid id="registerOrLoginLinkContainer">
              <Link to="/signin">Login</Link>
            </Grid>
          </Grid>
  );
};
export default SignUp;
