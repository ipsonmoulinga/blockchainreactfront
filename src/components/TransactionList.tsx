import {
  Accordion, AccordionDetails, AccordionSummary, Grid, Typography,
} from '@material-ui/core';
import React, { ReactElement } from 'react';
import { Itransaction } from '../model/BlockChain';

const transactionStyle = {
  backgroundColor: 'Green',
};
const summaryStyle = {
  backgroundColor: 'ForestGreen',
};
const detailStyle = {
  backgroundColor: 'DarkOliveGreen',
};
const TransactionList = (props:{transactionList: Itransaction[]}) : ReactElement => (
    <Grid style={{ width: '100%' }}>
        {props.transactionList.map((transaction, index) => (
        <Accordion key={index} style={transactionStyle}>
            <AccordionSummary key={index} style={summaryStyle}>
                <Typography>
                    Transaction N°{index + 1}
                </Typography>
            </AccordionSummary>
            <AccordionDetails style={detailStyle}>
                <Typography> Amount : {transaction.amount}</Typography>
            </AccordionDetails>
            <AccordionDetails style={detailStyle}>
                <Typography>Receiver : {(transaction.receiver) ? (transaction.receiver.PublicKey) : 'No One'}</Typography>
            </AccordionDetails>
            <AccordionDetails style={detailStyle}>
                <Typography>Sender : {(transaction.sender) ? (transaction.sender.PublicKey) : 'No One'}</Typography>
            </AccordionDetails>
        </Accordion>))}
    </Grid>
);
export default TransactionList;
