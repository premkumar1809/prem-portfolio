import React from 'react';

import { Content } from '../content/Content';
import { Hidden } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import DisplacementSphere from '../background/DisplacementSphere';
import { ThemeToggle } from '../theme/ThemeToggle';
import { Resume } from '../resume/Resume';
import { SocialIcons } from '../content/SocialIcons';
import { SpeedDials } from '../speedDial/SpeedDial';
import { SideNavbar } from '../nav/SideNavbar';
import { Works } from '../works/Works';
import { About } from '../about/About';
import { Contact } from '../contact/Contact';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
}));

export const Home = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.root} id="home">
        <DisplacementSphere />
        
        <Content />
        <ThemeToggle />
        <Hidden smDown>
          <SocialIcons />
        </Hidden>
        <Hidden mdUp>
          <SpeedDials />
        </Hidden>
        <Resume />
      </div>
      <SideNavbar />
      <Works />
      <About />
      <Contact />
    </>
  );
};
