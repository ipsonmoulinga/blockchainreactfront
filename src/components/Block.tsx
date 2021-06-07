import React, { ReactElement } from 'react';
import { Iblock } from '../model/BlockChain';
import TransactionList from './TransactionList';

const Block = (props:{BlockToDisplay: Iblock}) : ReactElement => (
    <ul>
        {/* if previous id display it, else print genesis block  */}
        {props.BlockToDisplay.previousId
          ? <li> id of previous block : {props.BlockToDisplay.previousId}</li>
          : <li>This is the Genesis block</li>}
          {/* display id  */}
          <li> id : {props.BlockToDisplay.id} </li>
           {/* display pending transactions  */}
           {(props.BlockToDisplay.pendingTransactions.length > 0)
             ? (<li> PendingTransactions :
                  <TransactionList transactionList={props.BlockToDisplay.pendingTransactions} />
            </li>)
             : (<li> No pending transactions !</li>)}

    </ul>
);
export default Block;
