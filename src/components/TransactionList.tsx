import React, { ReactElement } from 'react';
import { Itransaction } from '../model/BlockChain';
import Transaction from './Transaction';
import '../style/TransactionList.css';

const TransactionList = (props:{transactionList: Itransaction[]}) : ReactElement => (
    <ul className="ultrlist">
        {props.transactionList.map((transaction, index) => (
        <li key={index}>Transaction N°{index + 1}
            <Transaction TransactionToDisplay={transaction} />
        </li>))}
    </ul>
);
export default TransactionList;
