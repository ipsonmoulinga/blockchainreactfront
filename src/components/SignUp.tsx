import {
  Grid,
  Avatar,
  Button,
  makeStyles,
  createStyles,
  Theme,
  Input,
  InputAdornment,
} from '@material-ui/core';
import '../style/Sign.css';
import '../style/SignUp.css';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import PersonRoundedIcon from '@material-ui/icons/PersonRounded';
import VisibilityOffOutlinedIcon from '@material-ui/icons/VisibilityOffOutlined';
import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined';
import React, {
  ReactElement, useState,
}
  from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';
/** ******************* */

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    display: 'flex',
  },
  margin: {
    margin: theme.spacing(1),
  },
  signWrapper: {
    Width: '100vw',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  /* * ****************** ***** */
  /* * ****************** ***** */
  /* * ****************** ***** */
  /* * ****************** ***** */
  formContainerStyle: {
    height: '70%',
    width: '30%',
    backgroundColor: 'rgb(236, 236, 236)',
    opacity: '70%',
    borderRadius: '2% 2% 2% 2%',
    boxShadow: '25px 25px 50px black',
    [theme.breakpoints.down('sm')]: {
      width: '60vw',
      height: '50vh',
    },
  },
  /* * ****************** ***** */
  /* * ****************** ***** */
  /* * ****************** ***** */
  /* * ****************** ***** */
  avatarContainerStyle: {
    backgroundColor: 'transparent',
    height: '25%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    width: theme.spacing(9),
    height: theme.spacing(9),
    [theme.breakpoints.down('sm')]: {
      width: theme.spacing(7),
      height: theme.spacing(7),
    },
  },
  avatarIconStyle: {
    color: 'rgb(236, 236, 236)',
    backgroundColor: 'transparent',
    fontSize: '350%',
  },
  /* * ****************** */
  /* * ****************** */
  /* * ****************** */
  inputContainerStyle: {
    backgroundColor: 'rgb(236, 236, 236)',
    opacity: '75%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    height: '40%',
  },
  inputTextFieldContainerdStyle: {
    width: '70%',
    height: '20%',
    display: 'flex',
    justifyContent: 'space-between',
    [theme.breakpoints.down('sm')]: {
      width: '80%',
      backgroundColor: 'transparent',
    },
  },
  inputStyle: {
    color: 'DimGray',
    fontWeight: 'bold',
    fontSize: 20,
    '&::-webkit-input-placeholder': {
      color: 'red',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: 15,
    },
  },
  inputIcon: {
    color: 'DimGray',
    fontSize: '150%',
    [theme.breakpoints.down('sm')]: {
      fontSize: '125%',
    },
  },
  iconButton: {
    border: 'solid',
    borderColor: 'red',
    height: '30%',
    width: '30%',
  },
  /* * ****************** */
  /* * ****************** */
  /* * ****************** */
  signupButtonContainerStyle: {
    backgroundColor: 'rgb(236, 236, 236)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '15%',
  },

  signupButtonStyle: {
    backgroundColor: 'dimgray',
    color: 'rgb(236, 236, 236)',
    height: '50%',
    width: '60%',
    border: 'solid',
    bordercolor: 'transparent',
    fontSize: '130%',
    fontWeight: 'bold',
    '&:hover': {
      backgroundColor: 'transparent',
      bordercolor: 'dimgray',
      color: 'dimgray',
    },
    [theme.breakpoints.down('sm')]: {
      backgroundColor: 'dimgray',
      fontSize: 10,
    },
  },
  /** ********************************** */
  /** ********************************* */
  /** ******************************** */
  registerOrLoginLinkContainer: {
    backgroundColor: 'transparent',
    height: '20%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  linkStyle: {
    width: '60%',
    height: '40%',
    border: 'solid',
    borderColor: 'dimGray',
    backgroundColor: 'transparent',
    color: 'dimgray',
    fontWeight: 'bold',
    '&:hover': {
      backgroundColor: 'DimGray',
      color: 'rgb(236, 236, 236)',
    },
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '150%',
    [theme.breakpoints.down('sm')]: {
      fontSize: 12,
    },
  },
}));

const SignUp = () : ReactElement => {
  const classes = useStyles();
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
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
          <Grid className={classes.signWrapper}>
            <form className={classes.formContainerStyle}>
              <Grid className={classes.avatarContainerStyle}>
                <Avatar className={classes.avatar}>
                  <PersonRoundedIcon className={classes.avatarIconStyle}/>
                </Avatar>
              </Grid>
              <Grid className={classes.inputContainerStyle}>
                <Grid className={classes.inputTextFieldContainerdStyle}>
                <Grid
                    style={{ width: '100%', backgroundColor: 'transparent' }}
                >
                    <Input
                      className={classes.inputStyle}
                      type='text'
                      name='privatekey'
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder='email'
                      fullWidth={true}
                      startAdornment={
                        <InputAdornment position="start">
                          <MailOutlineIcon className={classes.inputIcon}/>
                        </InputAdornment>
                      }
                    />
                  </Grid>
                </Grid>
                <Grid className={classes.inputTextFieldContainerdStyle}>
                  <Grid style={{ width: '100%', backgroundColor: 'transparent' }}>
                    <Input
                      className={classes.inputStyle}
                      type={showPassword ? 'text' : 'password'}
                      placeholder='password'
                      fullWidth={true}
                      startAdornment={
                        <InputAdornment position="start">
                          <LockOpenIcon className={classes.inputIcon}/>
                        </InputAdornment>
                      }
                      endAdornment={
                        <InputAdornment position="end">
                          {showPassword
                            ? <VisibilityOutlinedIcon
                                className={classes.inputIcon}
                                onClick={handleClickShowPassword}/>
                            : <VisibilityOffOutlinedIcon
                                className={classes.inputIcon}
                                onClick={handleClickShowPassword}/>
                          }
                        </InputAdornment>
                      }
                    />
                  </Grid>
                </Grid>
                <Grid className={classes.inputTextFieldContainerdStyle}>
                  <Grid
                    style={{ width: '100%', backgroundColor: 'transparent' }}
                  >
                    <Input
                      className={classes.inputStyle}
                      type='password'
                      placeholder='password'
                      fullWidth={true}
                      startAdornment={
                        <InputAdornment position="start">
                          <LockOpenIcon className={classes.inputIcon}/>
                        </InputAdornment>
                      }
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Grid className={classes.signupButtonContainerStyle}>
                <Button
                  className={classes.signupButtonStyle}
                  onClick={handleSubmit}
                >
                  Sign up
                </Button>
              </Grid>
              <Grid className={classes.registerOrLoginLinkContainer}>
                <Button
                  className={classes.linkStyle}
                  component={Link}
                  to="/signin"
                >
                    Login
                </Button>
              </Grid>
            </form>
          </Grid>
  );
};
export default SignUp;
