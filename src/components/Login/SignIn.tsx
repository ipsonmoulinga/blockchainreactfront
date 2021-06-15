import {
  Grid, Avatar, Button, makeStyles, Link, TextField, IconButton, withStyles,
} from '@material-ui/core';
import './Sign.css';
import './SignIn.css';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import PersonRoundedIcon from '@material-ui/icons/PersonRounded';
import React, { ReactElement, useState } from 'react';
import VisibilityOffOutlinedIcon from '@material-ui/icons/VisibilityOffOutlined';
import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined';

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

const SignIn = () : ReactElement => {
  const classes = useStyles();
  // Add these variables to your component to track the state
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);
  return (
        <Grid id="sign-wrapper">
            <Grid id="formContainer">
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
                </Grid>
                <Grid className="submissionOrChangePassword" >
                  <Button id="signinButton"type="submit">Sign in</Button>
                  <Button>Password?</Button>
                </Grid>
            </Grid>
            <Grid id="registerInLoginLinkContainer">
              <Link to="/signin">Register</Link>
            </Grid>
        </Grid>
  );
};
export default SignIn;
