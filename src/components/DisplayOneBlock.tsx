/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable import/prefer-default-export */
import React from 'react';
import { DisplayTransaction } from './DisplayTransaction';
import { Block } from './Model';

export const DisplayOneBlock = (props:{BlockToDisplay: Block}) => (
    <ul>
        {/* if previous id display it, else print genesis block  */}
        {props.BlockToDisplay.previousId
          ? <li> id of previous block : {props.BlockToDisplay.previousId}</li>
          : <li> Genesis block</li>}
          {/* display id  */}
          <li> id : {props.BlockToDisplay.id} </li>
           {/* display pending transactions  */}
           {(props.BlockToDisplay.pendingTransactions.length > 0)
             ? (<li>
                <ul>
                  {props.BlockToDisplay.pendingTransactions.map(
                    (transaction, index) => <li key={index}>
                        Transaction N°{index + 1}:
                        <DisplayTransaction TransactionToDisplay={transaction}/></li>,
                  )}
                </ul>
            </li>)
             : (<li> No pending transactions !</li>)}

    </ul>
);
