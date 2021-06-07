import React, { ReactElement } from 'react';
import { Itransaction } from './Model';
import Transaction from './Transaction';

const TransactionList = (props:{transactionList: Itransaction[]}) : ReactElement => (
    <ul>
        {props.transactionList.map((transaction, index) => (
            <li key={index}>Transaction N°{index + 1}
              <Transaction TransactionToDisplay={transaction}/>
            </li>))}
    </ul>
);
export default TransactionList;
