/* eslint-disable implicit-arrow-linebreak */
import React, { ReactElement } from 'react';
import {
// createStyles, makeStyles, Theme,
} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import '../style/AppBarStyle.css';
// import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import PersonIcon from '@material-ui/icons/Person';
import '../style/App.css';

// const useStyles = makeStyles((theme: Theme) => createStyles({
//   root: {
//     flexGrow: 1,
//     position: 'fixed',
//     opacity: '70%',
//     backgroundColor: 'orangered',
//     Height: '5%',
//   },
//   menuButton: {
//     marginRight: theme.spacing(2),
//   },
//   title: {
//     flexGrow: 1,
//   },
//   toolbar: {
//     display: 'flex',
//     justifyContent: 'space-between',
//   },
// }));

const ApppBar = () : ReactElement =>
  // const classes = useStyles();
  (
  <AppBar
    // id='appbarstyle'
  >
    <Toolbar >
      <IconButton
        edge="start"
        aria-label="menu"
      >
        <MenuIcon />
      </IconButton>
      <IconButton
        edge="end"
        aria-label="login"
      >
        <PersonIcon />
      </IconButton>
    </Toolbar>
  </AppBar>
  );
export default ApppBar;
