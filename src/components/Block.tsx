import React, { ReactElement } from 'react';
import { Iblock } from '../model/BlockChain';
import TransactionList from './TransactionList';
import '../style/Block.css';

const Block = (props:{BlockToDisplay: Iblock}) : ReactElement => (
    <ul id="bloc">
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
    </ul>
);
export default Block;
