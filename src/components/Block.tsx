import React, { ReactElement } from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';
import { Iblock } from '../model/BlockChain';
import TransactionList from './TransactionList';
import '../style/Block.css';

const Block = (props:{BlockToDisplay: Iblock}): ReactElement => (
    <Card className="box">
      <CardContent>
      <Typography variant="h5" component="h2" className="text-center">Details </Typography>
        <div>
        {/* if previous id display it, else print genesis block  */}
        {props.BlockToDisplay.previousId
          ? <Typography color="textSecondary"> id of previous block : {props.BlockToDisplay.previousId}</Typography>
          : <Typography color="textSecondary">Genesis block (No previous Id)</Typography>}
          {/* display id  */}
          <Typography> id : {props.BlockToDisplay.id} </Typography>
           {/* display pending transactions  */}
           {(props.BlockToDisplay.pendingTransactions.length > 0)
             ? (<Typography> PendingTransactions :
                  <TransactionList transactionList={props.BlockToDisplay.pendingTransactions} />
            </Typography>)
             : (<Typography> No pending transactions !</Typography>)}
        </div>
      </CardContent>
    </Card>
);
export default Block;
