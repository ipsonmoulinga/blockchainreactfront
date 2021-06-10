import React, { ReactElement } from 'react';
import {
  ListItem, Card,
} from '@material-ui/core';
import { Itransaction } from '../model/BlockChain';
import Transaction from './Transaction';
import '../style/TransactionList.css';

const TransactionList = (props:{transactionList: Itransaction[]}) : ReactElement => (
    <ListItem className="ultrlist">
        {props.transactionList.map((transaction, index) => (
        <Card key={index}>Transaction N°{index + 1}
            <Transaction TransactionToDisplay={transaction} />
        </Card>))}
    </ListItem>
);
export default TransactionList;
