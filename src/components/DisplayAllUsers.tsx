import React, { ReactElement, useEffect, useState } from 'react';
import {
  Paper,
  Table, TableBody,
  TableCell, TableContainer, TableHead, TableRow, makeStyles, Button, Theme, createStyles,
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import { Iuser } from '../model/BlockChain';
import { getAllUsers } from '../service/api';

const useStyles = makeStyles((theme: Theme) => createStyles({
  table: {
    width: '80vw',
    backgroundColor: 'transparent',
  },
  tableContainer: {
    backgroundColor: 'transparent',
  },
  tableHead: {
    backgroundColor: 'transparent',
  },
  tableBody: {
    backgroundColor: 'transparent',
  },
  tableCell: {
    backgroundColor: 'transparent',
    verticalAlign: 'top',
    width: '100%',
    // wordBreak: 'break-word' as const,
    // color: 'white',
    fontWeight: 'bold',
    fontSize: '120%',
  },
  tableCell2: {
    backgroundColor: 'transparent',
    verticalAlign: 'top',
    width: '100%',
    fontWeight: 'bold',
    fontSize: '120%',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  transactionbutton: {
    display: 'none',
    [theme.breakpoints.down('sm')]: {
      display: 'block',
    },
  },
}));

const DisplayAllUsers = () : ReactElement => {
  const classes = useStyles();
  const [userList, setUserList] = useState<Iuser[]>([]);
  const setUserIntoTheState = async () => {
    const response = await getAllUsers();
    setUserList(response);
  };
  useEffect(() => {
    setUserIntoTheState();
  }, []);
  return (
    <div>
    <TableContainer
      className={classes.tableContainer} component={Paper}
    >
      <Table
        className={classes.table} aria-label="simple table"
      >
        <TableHead
          className={classes.tableHead}
        >
          <TableRow>
            <TableCell className={classes.tableCell}>Public key</TableCell>
            <TableCell className={classes.tableCell2}>Private key</TableCell>
          </TableRow>
        </TableHead>
        <TableBody
          className={classes.tableBody}
        >
          {userList.map((user, index) => (
            <TableRow key={index}>
              <TableCell
                key={index}
                className={classes.tableCell}
              >
                {user.PublicKey}
                <Button
                  className={classes.transactionbutton}
                  component={Link}
                  to={`/displaytransactions/${user.PublicKey}`}
                >
                  Transactions
                </Button>
              </TableCell>
              <TableCell
                className={classes.tableCell2}
              >
                {user.PrivateKey}
                <Button
                  component={Link}
                  to={`/displaytransactions/${user.PublicKey}`}
                >
                  Transactions
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
};
export default DisplayAllUsers;
