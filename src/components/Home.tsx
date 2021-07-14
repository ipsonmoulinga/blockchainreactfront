import {
  Button, FormControl, FormHelperText, Input,
} from '@material-ui/core';

// import { TextField } from "material-ui";
import React, { ReactElement, useEffect, useState } from 'react';
import { Iuser } from '../model/BlockChain';
import { getAllUsers } from '../service/api';

const FormValidator = (): ReactElement => {
  const [emailValidity, setEmailValidity] = useState({ bool: true, helperText: '' });
  const [passwordValidity, setPasswordValidity] = useState({ bool: true, helperTextcolor: 'red', helperText: '' });
  const [userList, setUserList] = useState<string[]>([]);
  const setUserListIntoTheState = async () => {
    const list = (await getAllUsers()).map((user:Iuser) => user.PublicKey);
    setUserList(list);
  };

  const checkEmailValidity = (e: { target: { value: string; }; }) => {
    if (!e.target.value) {
      setEmailValidity({ bool: false, helperText: 'Type your email' });
    } else if (userList.includes(e.target.value)) {
      setEmailValidity({ bool: false, helperText: 'Email already exist' });
    } else {
      setEmailValidity({ bool: true, helperText: '' });
    }
  };
  const checkEmailTextualValidity = (e: { target: { value: string; }; }) => {
    const re = /^(([^<>()\\[\]\\.,;:\s@"]+(\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(e.target.value)) {
      setEmailValidity({ bool: false, helperText: 'Please type a valid email' });
    } else {
      checkEmailValidity(e);
    }
  };
  const checkPassWordValidity = (e: { target: { value: string; }; }) => {
    if ((e.target.value).length<8) {
      setEmailValidity({ bool: false, helperText: 'Weak: Empty password' });
    } else if ( .includes(e.target.value)) {
      setEmailValidity({ bool: false, helperText: 'Email already exist' });
    } else {
      setEmailValidity({ bool: true, helperText: '' });
    }
  };
  useEffect(() => {
    setUserListIntoTheState();
  }, []);
  return (
    <form>
        <FormControl>
            <Input
                type='email'
                required={true}
                placeholder="email"
                onBlur={checkEmailTextualValidity}
                onChange={checkEmailValidity}
                error={!emailValidity.bool}
            />
            <FormHelperText
                error={emailValidity.bool}
                style={{ color: 'red' }}
                disabled={emailValidity.bool}>
                {emailValidity.helperText}
            </FormHelperText>
        </FormControl>
        <br></br><br></br>
        <FormControl>
            <Input
                type='password'
                required={true}
                placeholder="email"
                onBlur={checkTextualValidity}
                onChange={checkValidity}
                error={!emailValidity.bool}
            />
            <FormHelperText
                error={emailValidity.bool}
                style={{ color: 'red' }}
                disabled={emailValidity.bool}>
                {emailValidity.helperText}
            </FormHelperText>
        </FormControl>
        <Button disabled={!emailValidity.bool} type='submit'>submit</Button>
    </form>
  );
};
export default FormValidator;
