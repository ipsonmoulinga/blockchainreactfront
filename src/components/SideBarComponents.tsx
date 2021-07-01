import React from 'react';
import HomeIcon from '@material-ui/icons/Home';
import DashboardIcon from '@material-ui/icons/Dashboard';
import SettingsIcon from '@material-ui/icons/Settings';
import InsertLinkIcon from '@material-ui/icons/InsertLink';
import PersonRoundedIcon from '@material-ui/icons/PersonRounded';
import InfoIcon from '@material-ui/icons/Info';
import BlockChain from './BlockChain';
import { ISideBarComponent } from './SideBar';
import About from './About';
import Settings from './Settings';
import Dashboard from './Dashboard';
import Home from './Home';
import SignUp from './SignUp';
import SignIn from './SignIn';
import CreateUser from './CreateUser';

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
export const CreateUserElement : ISideBarComponent = {
  name: 'Create user',
  link: '/createuser',
  component: <CreateUser />,
  icon: <PersonRoundedIcon/>,
};
export const SideBarComponentList : ISideBarComponent[] = [
  HomeSideBarElement, AboutSideBarElement,
  DashBoardSideBarElement, SettingsSideBarElement, BlockChainSideBarElement,
  SignUpSideBarElement, SignInSideBarElement, CreateUserElement,
];
