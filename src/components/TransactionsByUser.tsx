import {
  createStyles,
  Grid, makeStyles, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Theme,
} from '@material-ui/core';
import React, { ReactElement, useEffect, useState } from 'react';
import { Itransaction } from '../model/BlockChain';
import { getAllTransactionsByUsers } from '../service/api';

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    fontSize: '150%',
    [theme.breakpoints.down('sm')]: {
      fontSize: '60%',
    },
  },
}));

const TransactionsByUser = (props:{publicKey:string}):ReactElement => {
  const classes = useStyles();
  const [ResponseToDisplay, setResponseToDisplay] = useState<Itransaction[]>([]);
  const setResponseInTheState = async () => {
    const response = await getAllTransactionsByUsers(props.publicKey);
    setResponseToDisplay(response);
  };
  useEffect(() => {
    setResponseInTheState();
  }, []);
  return (
    <Grid>
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell className={classes.root}>Amount</TableCell>
                        <TableCell className={classes.root}>Sender</TableCell>
                        <TableCell className={classes.root}>Receiver</TableCell>
                        <TableCell className={classes.root}>Status</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {ResponseToDisplay.map((transaction, index) => (
                        <TableRow key={index}>
                            <TableCell className={classes.root}>
                                {transaction.amount}
                            </TableCell>
                            <TableCell className={classes.root}>
                                {transaction.sender?.PublicKey}
                            </TableCell>
                            <TableCell className={classes.root}>
                                {transaction.receiver?.PublicKey}
                            </TableCell>
                            <TableCell className={classes.root}>
                                {transaction.status}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    </Grid>
  );
};
export default TransactionsByUser;
