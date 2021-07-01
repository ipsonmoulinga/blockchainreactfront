import React, { ReactElement, useEffect, useState } from 'react';
import { Iuser } from '../model/BlockChain';
import { createUser } from '../service/api';

const DisplayUser = (props:{userName:string}):ReactElement => {
  const defaultUser:Iuser = {
    privateKey: '',
    publicKey: '',
  };
  const [user, setUser] = useState<Iuser>(defaultUser);
  const setUserIntheState = async () => {
    const response = await createUser(props.userName);
    setUser(response);
  };
  useEffect(() => {
    setUserIntheState();
  }, []);
  return (<div>{JSON.stringify(user)}</div>);
};
export default DisplayUser;
