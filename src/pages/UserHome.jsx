import React from 'react';
import NavBarAlt from '../components/NavBarAlt';
import Sidebar from '../components/Sidebar';
import { Grid } from '@mui/material';
import Dashboard from '../components/Dashboard';

const UserHome = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <NavBarAlt />
      <div style={{ flex: 1, display: 'flex' }}>
        <Grid container>
          <Grid item sm={2} style={{ backgroundColor: '#A59132' }}>
            <Sidebar />
          </Grid>
          <Grid item sm={10}>
            <Dashboard/>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default UserHome;
