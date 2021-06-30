import React, { ReactElement } from 'react';
// import '../style/App.css';
// import {
//   BrowserRouter as Router, Route, Switch,
// } from 'react-router-dom';
// import {
//   // Drawer,
//   Grid, IconButton,
//   // Button
// } from '@material-ui/core';
// // import {
// //   HomeSideBarElement,
// //   SettingsSideBarElement,
// //   DashBoardSideBarElement,
// //   SignUpSideBarElement,
// //   SignInSideBarElement,
// //   AboutSideBarElement,
// //   BlockChainSideBarElement,
// // } from './SideBarComponents';
// import MenuIcon from '@material-ui/icons/Menu';
// import BlockChain from './BlockChain';
// // import SideBar, { ISideBarComponent } from './SideBar';
// import About from './About';
// import Settings from './Settings';
// import Dashboard from './Dashboard';
// import Home from './Home';
// import SignIn from './SignIn';
// import SignUp from './SignUp';
// import ApppBar from './ApppBar';
// // import ApppBar from './ApppBar';
// import PersistentDrawerLeft from './PersistentDrawer';
import PersistentDrawerLeft from './PersistentDrawer';

// const MenuList:ISideBarComponent[] = [HomeSideBarElement,
//   SettingsSideBarElement, DashBoardSideBarElement,
//   SignUpSideBarElement, SignInSideBarElement, AboutSideBarElement, BlockChainSideBarElement];

function App() : ReactElement {
  return (
    <div id="container">
      <PersistentDrawerLeft />
    </div>
  );
}
export default App;
