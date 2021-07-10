import React, { ReactElement, useEffect, useState } from 'react';
import {
  Paper,
  Table, TableBody,
  TableCell, TableContainer, TableHead, TableRow, makeStyles,
} from '@material-ui/core';
import { Iuser } from '../model/BlockChain';
import { getAllUsers } from '../service/api';

const useStyles = makeStyles({
  table: {
    minWidth: '80vh',
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
    color: 'white',
    fontWeight: 'bold',
    fontSize: '190%',
  },
});

const DisplayAllUser = () : ReactElement => {
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
            <TableCell className={classes.tableCell}>Private key</TableCell>
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
              </TableCell>
              <TableCell
                className={classes.tableCell}
              >
                {user.PrivateKey}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
};
export default DisplayAllUser;

// const DisplayAllUser = () : ReactElement => {
//   // const classes = useStyles();
//   const [userList, setUserList] = useState<Iuser[]>([]);
//   const setUserIntoTheState = async () => {
//     const response = await getAllUsers();
//     setUserList(response);
//   };
//   useEffect(() => {
//     setUserIntoTheState();
//   }, []);
//   return (
//     <div>
//       <ul>
//         {userList.map((user:Iuser, index:number) => (
//         <li key={index}>{user.PrivateKey}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };
// export default DisplayAllUser;
