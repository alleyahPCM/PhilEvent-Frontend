import React from 'react';
import NavBarAlt from '../components/NavBarAlt';
import Sidebar from '../components/Sidebar';
import { Grid } from '@mui/material';
import MyEvents from '../components/MyEvents';

const UserEvents = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
    <NavBarAlt />
    <div style={{ flex: 1, display: 'flex' }}>
      <Grid container>
        <Grid item sm={2} style={{ backgroundColor: '#A59132' }}>
          <Sidebar />
        </Grid>
        <Grid item sm={10}>
          <MyEvents/>
        </Grid>
      </Grid>
    </div>
  </div>
  )
}

export default UserEvents