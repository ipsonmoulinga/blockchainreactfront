/* eslint-disable no-undef */
import React, { ReactElement, useState } from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import CancelIcon from '@material-ui/icons/Cancel';
import {
  Grid, Tabs, Tab, IconButton, Slide,
} from '@material-ui/core';
import { Link } from 'react-router-dom';

export interface ISideBarComponent{
    name: string;
    link: string;
    component: ReactElement;
    icon: ReactElement;
  }

const SideBar = (props:{LinkComponentList :ISideBarComponent[]}): ReactElement => {
  const [visible, setVisible] = useState<boolean>(false);
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<unknown>, newValue: number) => {
    setValue(newValue);
  };
  const navigationTabsStyle = {
    maxWidth: '20vw',
    backgroundColor: 'transparent',
    minHeight: '100vh',
    width: (visible === true) ? '20vw' : '0',
    display: (visible === true) ? 'block' : 'none',
  };
  const iconMenuStyle = {
    display: (visible === false) ? 'block' : 'none',
  };
  const changeVisibility = () => {
    if (visible === true) {
      setVisible(false);
    } else {
      setVisible(true);
    }
  };
  return (
        <Grid id='sidebarContainer' style={{ marginLeft: '0', padding: '0' }} >
            <IconButton style={iconMenuStyle} onClick={changeVisibility}>
                <MenuIcon />
            </IconButton>
            <Slide direction='right' in={visible}>
                < Grid id='navigationTabs' style={navigationTabsStyle}>
                    <Tabs
                        style={{
                          backgroundColor: 'green', minHeight: '100vh', margin: '0', position: 'fixed',
                        }}
                        orientation="vertical"
                        scrollButtons="on"
                        indicatorColor="secondary"
                        textColor="secondary"
                        value={value}
                        onChange={handleChange} >
                        <Tab icon={<CancelIcon />}
                            onClick={changeVisibility}/>
                        {props.LinkComponentList.map((element, index) => (
                            <Tab key={index}
                                label={element.name}
                                to={element.link}
                                icon={element.icon}
                                component={Link}
                                style={{ backgroundColor: (value === index + 1) ? 'yellow' : 'transparent' }}
                                />))}
                      </Tabs>
                </Grid>
            </Slide>
        </Grid>
  );
};
export default SideBar;
