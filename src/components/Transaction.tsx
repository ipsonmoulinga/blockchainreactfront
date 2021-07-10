import React, { ReactElement } from 'react';
import { Itransaction } from '../model/BlockChain';

const Transaction = (
  props:{TransactionToDisplay: Itransaction},
) : ReactElement => (
    <ul >
      <li> details
        <ul>
          <li> Status of transaction:
              {(props.TransactionToDisplay.status === 1) ? ' Pending' : ' Achieved'}
          </li>
          <li> Amount : {props.TransactionToDisplay.amount}</li>
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
