import {
  Accordion, AccordionSummary, AccordionDetails, Grid, Typography,
} from '@material-ui/core';
import React, { ReactElement } from 'react';
import { Iblock } from '../model/BlockChain';
import TransactionList from './TransactionList';
import '../style/BlockList.css';

const blockStyle = {
  maxWidth: '100vw',
  backgroundColor: 'GoldenRod',
};
const blockSummaryStyle = {
  backgroundColor: 'GoldenRod',
};
const blockDetailsStyle = {
  backgroundColor: 'Gold',
  display: 'inline-block',
  width: '100%',
  wordBreak: 'break-word' as const,
};
const BlockList = (props:{blocklist : Iblock[]}) : ReactElement => (
    <Grid>
        {props.blocklist.map((block, index) => (
            <Accordion key={index} style={blockStyle}>
                <AccordionSummary style={blockSummaryStyle} key={index}>
                    <Typography><strong>Block N°{index + 1}</strong></Typography>
                </AccordionSummary>
                <AccordionDetails style={blockDetailsStyle}>
                    <Typography>  {block.previousId ? `Id of previous block: ${block.previousId}` : 'Genesis Block'}</Typography>
                </AccordionDetails>
                <AccordionDetails
                    style={blockDetailsStyle}
                    // id='accordionDetails'
                >
                    <Typography> Id : {block.id}</Typography>
                </AccordionDetails>
                <AccordionDetails style={{ backgroundColor: 'Gold' }}>
                        {(block.pendingTransactions.length > 0)
                          ? <TransactionList transactionList={block.pendingTransactions} /> : 'No Pending Transactions in this block'}
                </AccordionDetails>
            </Accordion>
        ))}
    </Grid>
);

export default BlockList;
