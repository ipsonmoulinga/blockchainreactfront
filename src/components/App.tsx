import React, { ReactElement } from 'react';
import '../style/App.css';
import {
  BrowserRouter as Router, Route, Switch,
} from 'react-router-dom';
import { Grid } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import DashboardIcon from '@material-ui/icons/Dashboard';
import SettingsIcon from '@material-ui/icons/Settings';
import InsertLinkIcon from '@material-ui/icons/InsertLink';
import InfoIcon from '@material-ui/icons/Info';
import BlockChain from './BlockChain';
import SideBar, { ISideBarComponent } from './SideBar';

function Home() : ReactElement {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}
function Settings() : ReactElement {
  return (
    <div>
      <h2>Settings</h2>
    </div>
  );
}
function Dashboard() : ReactElement {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
}
function About() : ReactElement {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}
const HomeSideBarElement : ISideBarComponent = {
  name: 'Home',
  link: '/',
  component: <Home />,
  icon: <HomeIcon/>,
};
const SettingsSideBarElement : ISideBarComponent = {
  name: 'Settings',
  link: '/settings',
  component: <Settings/>,
  icon: <SettingsIcon/>,
};
const DashBoardSideBarElement : ISideBarComponent = {
  name: 'Dashboard',
  link: '/dashboard',
  component: <Dashboard />,
  icon: <DashboardIcon/>,
};
const AboutSideBarElement : ISideBarComponent = {
  name: 'About',
  link: '/about',
  component: <About />,
  icon: <InfoIcon/>,
};
const BlockChainSideBarElement : ISideBarComponent = {
  name: 'BlockChain',
  link: '/blockchain',
  component: <BlockChain />,
  icon: <InsertLinkIcon/>,
};
const MenuList:ISideBarComponent[] = [HomeSideBarElement,
  SettingsSideBarElement, DashBoardSideBarElement, AboutSideBarElement, BlockChainSideBarElement];

function App() : ReactElement {
  return (
  <div id="App-Body">
    <Router>
    <SideBar LinkComponentList={MenuList} />
      <Grid className='secondContainer'>
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
          <Route path="/blockchain">
            <BlockChain />
          </Route>
        </Switch>
      </Grid>
    </Router>
  </div>
  );
}

export default App;
