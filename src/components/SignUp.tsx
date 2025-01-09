import {
  Grid,
  Avatar,
  Button,
  makeStyles,
  Card,
  createStyles,
  Theme,
  Input,
  InputAdornment,
  FormControl,
  FormHelperText,
} from '@material-ui/core';
import '../style/Sign.css';
import '../style/SignUp.css';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import PersonRoundedIcon from '@material-ui/icons/PersonRounded';
import VisibilityOffOutlinedIcon from '@material-ui/icons/VisibilityOffOutlined';
import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined';
import React, {
  ReactElement, useEffect, useState,
}
  from 'react';
import { Link } from 'react-router-dom';
import { EmailState, PasswordState } from '../model/Form';
import {
  emailTextualValidityManager,
  emailValiditionManager,
  getAllUsers,
  passWordConfirmationManager,
  passWordStrengthManager,
} from '../service/api';
import { Iuser } from '../model/BlockChain';

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
  const [emailValidity, setEmailValidity] = useState<EmailState>({ isValid: true, helperText: '' });
  const [passwordValidity, setPasswordValidity] = useState<PasswordState>({
    isValid: true, helperTextcolor: 'red', helperText: '', value: '',
  });
  const [passwordConfirmationValidity, setPasswordConfirmationValidity] = useState<PasswordState>({
    isValid: true, helperTextcolor: 'red', helperText: '', value: '',
  });
  const [userList, setUserList] = useState<string[]>([]);
  const setUserListIntoTheState = async () => {
    const list = (await getAllUsers()).map((user:Iuser) => user.PublicKey);
    setUserList(list);
  };

  const checkEmailValidity = (e: { target: { value: string; }; }) => {
    setEmailValidity(emailValiditionManager(userList, e.target.value));
  };
  const checkEmailTextualValidity = (e: { target: { value: string; }; }) => {
    setEmailValidity(emailTextualValidityManager(userList, e.target.value));
  };
  const checkPassWordValidity = (e: { target: { value: string; }; }) => {
    setPasswordValidity(passWordStrengthManager(e.target.value));
  };
  const checkPassWordConfirmationValidity = (e: { target: { value: string; }; }) => {
    setPasswordConfirmationValidity(
      passWordConfirmationManager(passwordValidity.value, e.target.value),
    );
  };
  useEffect(() => {
    setUserListIntoTheState();
  }, []);
  return (
          <Grid className={classes.signWrapper}>
            <Card className={classes.formContainerStyle}>
              <Grid className={classes.avatarContainerStyle}>
                <Avatar className={classes.avatar}>
                  <PersonRoundedIcon className={classes.avatarIconStyle}/>
                </Avatar>
              </Grid>
              <Grid className={classes.inputContainerStyle}>
                <Grid className={classes.inputTextFieldContainerdStyle}>
                  <FormControl
                    style={{ width: '100%', backgroundColor: 'transparent' }}
                  >
                    <Input
                      className={classes.inputStyle}
                      type='text'
                      placeholder='email'
                      required={true}
                      onBlur={checkEmailTextualValidity}
                      onChange={checkEmailValidity}
                      error={!emailValidity.isValid}
                      fullWidth={true}
                      startAdornment={
                        <InputAdornment position="start">
                          <MailOutlineIcon className={classes.inputIcon}/>
                        </InputAdornment>
                      }
                    />
                    <FormHelperText
                      error={emailValidity.isValid}
                      style={{ color: 'red' }}
                      disabled={emailValidity.isValid}>
                      {emailValidity.helperText}
                    </FormHelperText>
                  </FormControl>
                </Grid>
                <Grid className={classes.inputTextFieldContainerdStyle}>
                  <FormControl style={{ width: '100%', backgroundColor: 'transparent' }}>
                    <Input
                      className={classes.inputStyle}
                      type={showPassword ? 'text' : 'password'}
                      placeholder='password'
                      fullWidth={true}
                      required={true}
                      onChange={checkPassWordValidity}
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
                    <FormHelperText
                      style={{ color: passwordValidity.helperTextcolor }}
                      disabled={emailValidity.isValid}>
                      {passwordValidity.helperText}
                    </FormHelperText>
                  </FormControl>
                </Grid>
                <Grid className={classes.inputTextFieldContainerdStyle}>
                  <FormControl
                    style={{ width: '100%', backgroundColor: 'transparent' }}
                  >
                    <Input
                      className={classes.inputStyle}
                      type='password'
                      placeholder='password'
                      required={true}
                      onBlur={checkPassWordConfirmationValidity}
                      fullWidth={true}
                      startAdornment={
                        <InputAdornment position="start">
                          <LockOpenIcon className={classes.inputIcon}/>
                        </InputAdornment>
                      }
                    />
                    <FormHelperText
                      style={{ color: passwordConfirmationValidity.helperTextcolor }}
                      disabled={passwordConfirmationValidity.isValid}>
                      {passwordConfirmationValidity.helperText}
                    </FormHelperText>
                  </FormControl>
                </Grid>
              </Grid>
              <Grid className={classes.signupButtonContainerStyle}>
                <Button
                  className={classes.signupButtonStyle}
                  disabled={!(emailValidity.isValid
                    && passwordValidity.isValid
                    && passwordConfirmationValidity.isValid)}
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
            </Card>
          </Grid>
  );
};
export default SignUp;
