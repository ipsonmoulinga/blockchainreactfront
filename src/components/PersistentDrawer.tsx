import React, { ReactElement } from 'react';
import clsx from 'clsx';
import {
  makeStyles, useTheme, Theme, createStyles,
} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import PersonIcon from '@material-ui/icons/Person';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import {
  Link,
  BrowserRouter as Router, Route, Switch,
} from 'react-router-dom';
import { ISideBarComponent } from './SideBar';
import About from './About';
import Settings from './Settings';
import Dashboard from './Dashboard';
import Home from './Home';
import SignIn from './SignIn';
import SignUp from './SignUp';
import BlockChain from './BlockChain';
import { SideBarComponentList } from './SideBarComponents';
import '../style/App.css';
import DisplayTransactionsByUser from './DisplayTransactionsByUser';
import DisplayAllUsers from './DisplayAllUsers';

const drawerWidth = 240;
// const drawerWidthLittleScreen = 50;

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    display: 'flex',
  },
  appBar: {
    backgroundColor: '#ff0000',
    color: 'black',
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    [theme.breakpoints.down('sm')]: {
      width: 'calc(100% - 50px)',
      marginLeft: 50,
    },
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  toolBar: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    backgroundColor: '#ff0000',
    [theme.breakpoints.down('sm')]: {
      width: 50,
    },
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundImage: 'linear-gradient(to bottom, #ff0000, #ff5100, #ff7700, #ff9700, #ffb300, #ecba00, #d8bf00, #c4c400, #9ab400, #71a300, #469200, #008000)',
    backgroundRepeat: 'no-repeat',
    [theme.breakpoints.down('sm')]: {
      backgroundColor: '#ff0000',
      width: 50,
    },
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: 0,
    minHeight: '100vh',
    backgroundImage: 'linear-gradient(to bottom, #ff0000, #ff5100, #ff7700, #ff9700, #ffb300, #ecba00, #d8bf00, #c4c400, #9ab400, #71a300, #469200, #008000)',
    backgroundRepeat: 'no-repeat',
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: (-drawerWidth),
    [theme.breakpoints.down('sm')]: {
      marginLeft: -50,
    },
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

export default function PersistentDrawerLeft() : ReactElement {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Router>
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar className={classes.toolBar}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Barre de navigation
          </Typography>
          <IconButton
            edge="end"
            aria-label="login"
          >
            <PersonIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
          {SideBarComponentList.map((sidebarcomponent:ISideBarComponent, index:number) => (
            <ListItem button
                key={index}
                component={Link}
                to={sidebarcomponent.link}>
              <ListItemIcon>{sidebarcomponent.icon}</ListItemIcon>
              <ListItemText primary={sidebarcomponent.name} id='drawertext'/>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
           <Switch >
               <Route exact path="/">
                 <Home />
               </Route>
               <Route path="/Settings">
                 <Settings/>
               </Route>
               <Route path="/about">
                 <About />
               </Route>
               <Route path="/dashboard">
                 <Dashboard />
               </Route>
                <Route path="/displaytransactions/:publickey">
                  <DisplayTransactionsByUser />
                </Route>
               <Route path="/blockchain">
                 <BlockChain />
               </Route>
               <Route path="/signup">
                 <SignUp />
               </Route>
               <Route path="/signin">
                 <SignIn />
               </Route>
               <Route path="/displayallusers">
                 <DisplayAllUsers />
               </Route>
             </Switch>
      </main>
    </div>
    </Router>
  );
}
