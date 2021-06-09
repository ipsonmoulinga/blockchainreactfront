import React, { ReactElement } from 'react';
import { Itransaction } from '../model/BlockChain';
import '../style/Transaction.css';

const Transaction = (
  props:{TransactionToDisplay: Itransaction},
) : ReactElement => (
    <ul id="menu-accordeon-transaction">
      <li> details
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
      </li>
    </ul>
);
export default Transaction;
