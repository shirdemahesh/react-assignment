import React from 'react';
import Sidenav from './Sidenav';
import { Box } from '@mui/material';
import Navbar from './Navbar';


export default function Logout() {
  return (
    <>
    <Navbar />
    <Box height={50} />
        <Box sx={{ display:"flex"}}>
        <Sidenav />
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <h1>Logout</h1>
            </Box>
        </Box>
    </>
  )
}
