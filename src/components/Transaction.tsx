import {
  Button, Grid, Input,
} from '@material-ui/core';
import React, { ReactElement, useEffect, useState } from 'react';

import { Itransaction, Iuser } from '../model/BlockChain';
import { getAllUsers } from '../service/api';

const Transaction = (
  props:{TransactionToDisplay: Itransaction},
) : ReactElement => (
    <ul >
      <li> details
        <ul>
          <li> Status of transaction:
              {props.TransactionToDisplay.status}
          </li>
          <li> Amount: {props.TransactionToDisplay.amount}</li>
          <li> Sender: {(props.TransactionToDisplay.sender)
            ? props.TransactionToDisplay.sender.PrivateKey
            : 'None'}
          </li>
          <li> Receiver: {(props.TransactionToDisplay.receiver)
            ? props.TransactionToDisplay.receiver.PrivateKey
            : 'Noner'}
          </li>
        </ul>
      </li>
    </ul>
);
export default Transaction;

export const CreateTransaction = ():ReactElement => {
  const [userList, setUserList] = useState<Iuser[]>([]);
  const setUserIntoTheState = async () => {
    const response = await getAllUsers();
    setUserList(response);
  };
  useEffect(() => {
    setUserIntoTheState();
  }, []);
  return (
    <Grid>
         <form>
          <Input
            type='number'
            placeholder='amount' />
          <select name="sender">
            <option value="">--Please choose a sender--</option>
            {userList
              .map((user: Iuser) => user.PublicKey)
              .map((userPublicKey, index) => (
                <option key={index} value={userPublicKey}>{userPublicKey}</option>
              ))
            }
          </select>
          <select name="receiver">
            <option value="">--Please choose a receiver--</option>
            {userList
              .map((user: Iuser) => user.PublicKey)
              .map((userPublicKey, index) => (
                <option key={index} value={userPublicKey}>{userPublicKey}</option>
              ))
            }
          </select>
          <Button type='submit'>Submit</Button>
        </form>
    </Grid>
  );
};
