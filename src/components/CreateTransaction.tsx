import {
  Grid,
  Avatar,
  Button,
  makeStyles,
  createStyles,
  Theme,
  Input,
  FormControl,
  FormHelperText,
} from '@material-ui/core';
import '../style/Sign.css';
import '../style/SignUp.css';
import PersonRoundedIcon from '@material-ui/icons/PersonRounded';
import React, {
  ReactElement, useEffect, useState,
} from 'react';
import { Iuser } from '../model/BlockChain';
import { getAllUsers, getBalance, updateTransactionState } from '../service/api';
import { TransactionSender, TransactionState } from '../model/Form';

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
  signinButtonContainerStyle: {
    backgroundColor: 'rgb(236, 236, 236)',
    width: '100%',
    // opacity: '60%',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: '15%',
  },
  /** ************************* */
  signinButtonStyle: {
    backgroundColor: 'dimgray',
    color: 'rgb(236, 236, 236)',
    height: '50%',
    width: '40%',
    border: 'solid',
    bordercolor: 'transparent',
    fontSize: '100%',
    fontWeight: 'bold',
    '&:hover': {
      backgroundColor: 'transparent',
      bordercolor: 'dimgray',
      color: 'dimgray',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: 8,
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

export const CreateTransaction = () : ReactElement => {
  const classes = useStyles();
  const [userList, setUserList] = useState<Iuser[]>([]);
  const [transactionValidity, setTransactionValidity] = useState<TransactionState>({ isValid: true, helperText: '', receiverHelperText: '' });
  const [sender, setSender] = useState<TransactionSender>({ publickey: '', balance: 0 });
  const [receiver, setReceiver] = useState<string>('');
  const [amount, setAmount] = useState<number>(0);
  const setUserIntoTheState = async () => {
    const response = await getAllUsers();
    setUserList(response);
  };

  const updateSender = async (event: { target: { value: string; }; }) => {
    setSender({ publickey: event.target.value, balance: (await getBalance(event.target.value)) });
    setTransactionValidity(updateTransactionState(amount,
      {
        publickey: event.target.value,
        balance: (await getBalance(event.target.value)),
      },
      receiver));
  };
  const updateAmount = (event: { target: { value: string; }; }) => {
    setAmount(Number(event.target.value));
    setTransactionValidity(updateTransactionState(Number(event.target.value), sender, receiver));
  };
  const updateReceiverState = (e: { target: { value: string; }; }) => {
    setReceiver(e.target.value);
    setTransactionValidity(updateTransactionState(amount, sender, e.target.value));
  };
  useEffect(() => {
    setUserIntoTheState();
  }, []);
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
                    <FormControl style={{ width: '100%', backgroundColor: 'transparent' }}>
                        <Input
                            className={classes.inputStyle}
                            onChange={updateAmount}
                            type='number'
                            placeholder='Amount'
                            fullWidth={true}
                        />
                         <FormHelperText
                            error={!transactionValidity.isValid}
                          >
                           {transactionValidity.helperText}
                          </FormHelperText>
                    </FormControl>
                </Grid>
                <Grid className={classes.inputTextFieldContainerdStyle}>
                    <Grid
                        style={{ width: '100%', backgroundColor: 'transparent' }}
                    >
                        <select
                            onChange={updateSender}
                            className={classes.inputStyle}>
                            <option>--Please choose a sender--</option>
                            {userList
                              .map((user: Iuser) => user.PublicKey)
                              .map((userPublicKey, index) => (
                                    <option key={index} value={userPublicKey}>
                                        {userPublicKey}
                                    </option>
                              ))
                                }
                        </select>
                    </Grid>
                </Grid>
                <Grid className={classes.inputTextFieldContainerdStyle}>
                    <Grid
                        style={{ width: '100%', backgroundColor: 'transparent' }}
                    >
                        <select
                            onChange={updateReceiverState}
                            className={classes.inputStyle}>
                            <option>-- Please choose a receiver --</option>
                            {userList
                              .map((user: Iuser) => user.PublicKey)
                              .map((userPublicKey, index) => (
                                <option key={index} value={userPublicKey}>
                                    {userPublicKey}
                                </option>
                              ))
                            }
                        </select>
                        <FormHelperText
                            error={!transactionValidity.isValid}
                          >
                           {transactionValidity.receiverHelperText}
                          </FormHelperText>
                    </Grid>
                </Grid>
            </Grid>
        <Grid className={classes.registerOrLoginLinkContainer}>
          <Button
            className={classes.linkStyle}
            type="submit"
            disabled={!transactionValidity.isValid}
          >
            Create transaction
          </Button>
        </Grid>
      </form>
    </Grid>
  );
};
export default CreateTransaction;
