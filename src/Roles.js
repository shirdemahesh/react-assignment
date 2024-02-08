import React from 'react';
import Sidenav from './Sidenav';
import Navbar from './Navbar';
import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';

export default function Roles() {
  return (
    <>
    <Navbar />
    <Box height={50} />
        <Box sx={{ display:"flex"}}>
        <Sidenav />
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <h1>Roles</h1>
            </Box>
        </Box>
    </>
  )
}

