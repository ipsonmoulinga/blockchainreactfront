import React, { ReactElement } from 'react';
import { Card } from '@material-ui/core';
import { Iblock } from '../model/BlockChain';
import TransactionList from './TransactionList';
import '../style/Block.css';

const Block = (props:{BlockToDisplay: Iblock}) : ReactElement => (
    <Card variant="outlined">
      <li>Details
        <ul>
        {/* if previous id display it, else print genesis block  */}
        {props.BlockToDisplay.previousId
          ? <li> id of previous block : {props.BlockToDisplay.previousId}</li>
          : <li>Genesis block (No previous Id)</li>}
          {/* display id  */}
          <li> id : {props.BlockToDisplay.id} </li>
           {/* display pending transactions  */}
           {(props.BlockToDisplay.pendingTransactions.length > 0)
             ? (<li> PendingTransactions :
                  <TransactionList transactionList={props.BlockToDisplay.pendingTransactions} />
            </li>)
             : (<li> No pending transactions !</li>)}
        </ul>
      </li>
    </Card>
);
export default Block;
