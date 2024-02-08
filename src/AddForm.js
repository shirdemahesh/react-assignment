import React from 'react';
import { useState, useEffect } from 'react';
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import IconButton  from '@mui/material/IconButton';
import Box from "@mui/material/Box";
import  Grid  from '@mui/material/Grid';
import TextField from '@mui/material/TextField';

export default function AddForm({closeEvent}) {
  return (
    <div>
        <Box sx={{m:2}} />
          <Typography variant='h5'  style={{textAlign:"center", position:"absolute", top:"0", left:"0" }} >
           Add User 
          </Typography>
          <IconButton 
          onClick={closeEvent} >
            <CloseIcon align='center' style={{ position:"absolute", top:"-40", right:"-8"}}  />
          </IconButton>
          <Grid container spacing={2}></Grid> 
          <Grid item xs={6} style={{ margin: "10px"}}>
          <TextField id="outlined-basic" label="First Name" variant="outlined" size='small' sx={{minWidth : "100%"}} />
          </Grid>
          <Grid item xs={6} style={{ margin: "10px"}}>
          <TextField id="outlined-basic" label="Last Name" variant="outlined" size='small'  sx={{minWidth : "100%"}}/>
          </Grid>
          <Grid item xs={12} style={{ margin: "10px"}}>
          <TextField id="outlined-basic" label="Email" variant="outlined" size='small'  sx={{minWidth : "100%"}}/>
          </Grid>
          <Grid item xs={12} style={{ margin: "10px"}}>
          <TextField id="outlined-basic" label="Password" variant="outlined" size='small'  sx={{minWidth : "100%"}}/>
          </Grid>

        <button type="submit">Add User</button>

    </div>
  )
}
