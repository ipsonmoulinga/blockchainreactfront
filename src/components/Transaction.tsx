import React, { ReactElement } from 'react';
import { Card, Typography } from '@material-ui/core';
import { Itransaction } from '../model/BlockChain';
import '../style/Transaction.css';

const Transaction = (
  props:{TransactionToDisplay: Itransaction},
) : ReactElement => (
    <Card id="menu-accordeon-transaction">
      <div>
        <div>
          <Typography> Status of transaction:
              {(props.TransactionToDisplay.status === 1) ? ' Pending' : ' Achieved'}
          </Typography>
          <Typography> Amount : {props.TransactionToDisplay.amount}</Typography>
          <Typography> Sender: {(props.TransactionToDisplay.sender)
            ? props.TransactionToDisplay.sender.privateKey
            : 'None'}
          </Typography>
          <Typography> Receiver: {(props.TransactionToDisplay.receiver)
            ? props.TransactionToDisplay.receiver.privateKey
            : 'Noner'}
          </Typography>
        </div>
      </div>
    </Card>
);
export default Transaction;
