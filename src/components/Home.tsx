import {
  Button, FormControl, FormHelperText, Input,
} from '@material-ui/core';
import React, { ReactElement, useEffect, useState } from 'react';
import { Iuser } from '../model/BlockChain';
import { EmailState, PasswordState } from '../model/Form';
import {
  emailTextualValidityManager,
  emailValiditionManager,
  getAllUsers, passWordConfirmationManager, passWordStrengthManager,
} from '../service/api';
// import CreateTransaction from './CreateTransaction';

export const FormValidator = (): ReactElement => {
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
    <form style={{ maxWidth: '70%', textAlign: 'center' }}>
        <FormControl style={{ width: '100%' }}>
            <Input
                type='email'
                placeholder="email"
                required={true}
                onBlur={checkEmailTextualValidity}
                onChange={checkEmailValidity}
                error={!emailValidity.isValid}
            />
            <FormHelperText
                error={emailValidity.isValid}
                style={{ color: 'red' }}
                disabled={emailValidity.isValid}>
                {emailValidity.helperText}
            </FormHelperText>
        </FormControl>
        <br></br><br></br>
        <FormControl style={{ width: '70%' }}>
            <Input
                style={{ width: '70%' }}
                type='password'
                placeholder="password"
                required={true}
                onChange={checkPassWordValidity}
            />
            <FormHelperText
                style={{ color: passwordValidity.helperTextcolor }}
                disabled={emailValidity.isValid}>
                {passwordValidity.helperText}
            </FormHelperText>
        </FormControl>
        <br></br><br></br>
        <FormControl style={{ width: '70%' }}>
            <Input
                type='password'
                placeholder="password confirmation"
                required={true}
                onBlur={checkPassWordConfirmationValidity}
            />
            <FormHelperText
                style={{ color: passwordConfirmationValidity.helperTextcolor }}
                disabled={passwordConfirmationValidity.isValid}>
                {passwordConfirmationValidity.helperText}
            </FormHelperText>
        </FormControl>
        <br></br>
        <br></br>
        <Button
          disabled={!(emailValidity.isValid
            && passwordValidity.isValid
            && passwordConfirmationValidity.isValid)}
          type='submit'>
            submit
        </Button>
    </form>
  );
};

const Home = () : ReactElement => <div
  // style={{ backgroundColor: 'yellow', textAlign: 'center' }}
  >
    <h2>Home</h2>
    <br></br>
    <div>
      {/* <FormValidator /> */}
      {/* <CreateTransaction/> */}
    </div>
  </div>;
export default Home;
