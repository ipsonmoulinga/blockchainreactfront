/* eslint-disable no-undef */
import React, { ReactElement } from 'react';
import { Itransaction } from './Model';

const Transaction = (
  props:{TransactionToDisplay: Itransaction},
) : ReactElement => (
    <ul>
        <li> Status of transaction:
            {(props.TransactionToDisplay.status === 1) ? ' Pending' : ' Achieved'}
        </li>
        <li> Amount : {props.TransactionToDisplay.amount}</li>
        <li> Sender: {(props.TransactionToDisplay.sender)
          ? props.TransactionToDisplay.sender.privateKey
          : 'None'}
        </li>
        <li> Receiver: {(props.TransactionToDisplay.receiver)
          ? props.TransactionToDisplay.receiver.privateKey
          : 'Noner'}
        </li>
    </ul>
);
export default Transaction;
