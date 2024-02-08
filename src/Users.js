import React from 'react'
import Sidenav from './Sidenav';
import Navbar from './Navbar';
import UserList from "./UserList";
import { Box } from '@mui/material';

export default function Users() {
  return (
    <>
    <Navbar />
    <Box height={50} />
        <Box sx={{ display:"flex"}}>
        <Sidenav />
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <UserList />
            </Box>
        </Box>
    </>
  )
}
