import React from 'react';
import HomeIcon from '@material-ui/icons/Home';
import DashboardIcon from '@material-ui/icons/Dashboard';
import SettingsIcon from '@material-ui/icons/Settings';
import InsertLinkIcon from '@material-ui/icons/InsertLink';
import ListIcon from '@material-ui/icons/List';
import InfoIcon from '@material-ui/icons/Info';
import BlockChain from './BlockChain';
import { ISideBarComponent } from './SideBar';
import About from './About';
import Settings from './Settings';
import Dashboard from './Dashboard';
import Home from './Home';
import SignUp from './SignUp';
import SignIn from './SignIn';
import DisplayAllUsers from './DisplayAllUsers';

export const HomeSideBarElement : ISideBarComponent = {
  name: 'Home',
  link: '/',
  component: <Home />,
  icon: <HomeIcon />,
};

export const SettingsSideBarElement : ISideBarComponent = {
  name: 'Settings',
  link: '/settings',
  component: <Settings/>,
  icon: <SettingsIcon/>,
};

export const DashBoardSideBarElement : ISideBarComponent = {
  name: 'Dashboard',
  link: '/dashboard',
  component: <Dashboard />,
  icon: <DashboardIcon/>,
};
export const AboutSideBarElement : ISideBarComponent = {
  name: 'About',
  link: '/about',
  component: <About />,
  icon: <InfoIcon/>,
};
export const BlockChainSideBarElement : ISideBarComponent = {
  name: 'BlockChain',
  link: '/blockchain',
  component: <BlockChain />,
  icon: <InsertLinkIcon/>,
};
export const SignUpSideBarElement : ISideBarComponent = {
  name: 'SignUp',
  link: '/signup',
  component: <SignUp />,
  icon: <InsertLinkIcon/>,
};
export const SignInSideBarElement : ISideBarComponent = {
  name: 'SignIn',
  link: '/signin',
  component: <SignIn />,
  icon: <InsertLinkIcon/>,
};
export const DisplayAllUsersElement : ISideBarComponent = {
  name: 'Show all users',
  link: '/displayallusers',
  component: <DisplayAllUsers />,
  icon: <ListIcon/>,
};
export const SideBarComponentList : ISideBarComponent[] = [
  HomeSideBarElement, AboutSideBarElement,
  DashBoardSideBarElement, SettingsSideBarElement, BlockChainSideBarElement,
  SignUpSideBarElement, SignInSideBarElement, DisplayAllUsersElement,
];
