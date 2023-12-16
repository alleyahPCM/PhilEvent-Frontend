import React from 'react';
import NavBarAlt from '../components/NavBarAlt';
import Sidebar from '../components/Sidebar';
import { Grid } from '@mui/material';
import Calendar from '../components/Calendar';

const UserCalendar = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <NavBarAlt />
      <div style={{ flex: 1, display: 'flex' }}>
        <Grid container>
          <Grid item sm={2} style={{ backgroundColor: '#A59132' }}>
            <Sidebar />
          </Grid>
          <Grid item sm={10}>
            <Calendar/>
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default UserCalendar