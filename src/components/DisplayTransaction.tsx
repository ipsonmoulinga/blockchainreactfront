/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable import/prefer-default-export */
import React from 'react';
import { Transaction } from './Model';

export const DisplayTransaction = (props:{TransactionToDisplay: Transaction}) => (
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
