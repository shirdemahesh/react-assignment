import React from 'react';
import Sidenav from './Sidenav';
import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';
import Navbar from './Navbar';

export default function Profile() {
  return (
    <>
    <Navbar />
    <Box height={50} />
        <Box sx={{ display:"flex"}}>
        <Sidenav />
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <h1>Profile</h1>
            </Box>
        </Box>
    </>
  )
}
