import React, { ReactElement, useState } from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import CancelIcon from '@material-ui/icons/Cancel';
import {
  Grid,
  Tabs, Tab, IconButton, Slide,
} from '@material-ui/core';
import { Link } from 'react-router-dom';

export interface ISideBarComponent{
    name: string;
    link: string;
    component: ReactElement;
    icon: ReactElement;
}
const SideBar = (props:{LinkComponentList: ISideBarComponent[]}): ReactElement => {
  const [visible, setVisible] = useState<boolean>(false);
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<Record<string, never>>, newValue: number) => {
    setValue(newValue);
  };
  const SideBarContainerStyle = {
    marginLeft: '0',
    padding: '0',
    backgroundColor: (visible === true) ? 'green' : 'transparent',
    minHeight: '100%',
  };
  const navigationTabsStyle = {
    backgroundColor: 'green',
    minHeight: '100vh',
    display: (visible === true) ? 'inline-block' : 'none',
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
        <Grid id='sidebarContainer' style={SideBarContainerStyle} >
            <IconButton style={iconMenuStyle} onClick={changeVisibility}>
                <MenuIcon />
            </IconButton>
            <Slide direction='right' in={visible}>
              < Grid id='navigationTabs' style={navigationTabsStyle}>
                <Tabs
                  style={{
                    backgroundColor: 'green', height: '100%', margin: '0', position: 'sticky', top: '0',
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
