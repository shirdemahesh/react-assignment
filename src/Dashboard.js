import React from 'react';
import Sidenav from './Sidenav';
import Navbar from './Navbar';
import Graphs from './Graphs';
import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import PersonPinOutlinedIcon from '@mui/icons-material/PersonPinOutlined';
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import CountUp from 'react-countup';

import './style.css';

export default function Dashboard() {
  return (
    <>
    <Navbar />
    <Box height={70} />
        <Box sx={{ display:"flex"}}>
        <Sidenav />
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <Grid container spacing={2}>
            <Grid item xs={3}>
            <Card sx={{ maxWidth: 250 }}>
            <CardContent className='card1'>
                <Typography gutterBottom variant="h5" component="div">
                <PeopleAltOutlinedIcon  className='icon'/>
                <span><CountUp
                        delay={1}
                        end={20}
                        duration={2.0}>
                        </CountUp>
                    </span>
                </Typography>
                <Typography variant="body2" color="text.secondary">
                Number of Users
                </Typography>
            </CardContent>
            </Card>
            </Grid>
            <Grid item xs={3}>
            <Card sx={{ maxWidth: 250 }}>
            <CardContent className='card2'>
                <Typography gutterBottom variant="h5" component="div">
                <PersonPinOutlinedIcon />
                <span><CountUp
                        delay={0.4}
                        end={2}
                        duration={0.4}>
                        </CountUp></span>
                </Typography>
                <Typography variant="body2" color="text.secondary">
                Number of Roles
                </Typography>
            </CardContent>
            </Card>
            </Grid>
            <Grid item xs={3}>
            <Card sx={{ maxWidth: 250 }}>
            <CardContent className='card3'>
                <Typography gutterBottom variant="h5" component="div">
                <LockOpenOutlinedIcon />
                <span><CountUp
                        delay={0.4}
                        end={1}
                        duration={0.2}>
                        </CountUp></span>
                </Typography>
                <Typography variant="body2" color="text.secondary">
                Number of Currunt LogIn
                </Typography>
            </CardContent>
            </Card>
            </Grid><Grid item xs={3}>
            <Card sx={{ maxWidth: 250 }}>
            <CardContent className='card4'>
                <Typography gutterBottom variant="h5" component="div">
                <AccountCircleOutlinedIcon />
                <span><CountUp
                        delay={0.4}
                        end={2}
                        duration={0.4}>
                        </CountUp></span>
                </Typography>
                <Typography variant="body2" color="text.secondary">
                Number of Profiles
                </Typography>
            </CardContent>
            </Card>
            </Grid>
            </Grid>
            <Box height={40} />
            <Grid container spacing={4}>
            <Grid item xs={6}>
            <Card sx={{ maxWidth: 800 }}>
            <CardContent className='card5'>
                <Typography gutterBottom variant="h5" component="div">
                <Graphs />
                </Typography>
                <Typography variant="body2" color="text.secondary">
                
                </Typography>
            </CardContent>
            </Card>
            </Grid>
            </Grid>
            </Box>
        </Box>

    </>
      
  )
}
