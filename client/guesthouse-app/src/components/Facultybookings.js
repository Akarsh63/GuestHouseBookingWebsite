import { Box, Button, Grid, Typography } from '@mui/material';
import nodataGif from '../images/nodata.svg';
import './facultybooking.css'
import VisibilityIcon from '@mui/icons-material/Visibility';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useEffect, useState } from 'react';
export default function Facultybookings() {
  return (
    <Box sx={{backgroundColor:'#f2f2f2'}} >
        <Box sx={{padding:'50px 160px 0px',position:'sticky',zIndex:2,top:'70px',backgroundColor:'#afb3ba'}} className='box1'>
           <Grid container style={{display:'flex',flexDirection:'column',backgroundColor:'#fff',borderRadius:'8px 8px 0 0 ',boxShadow:'0 2px 20px 0 rgba(0,0,0,.1)',padding:'20px 20px 30px'}} >
            <Grid item style={{textAlign:'center',}}>
                <Typography style={{color:'#000',fontWeight:'500',fontSize:'23px'}}>ALL BOOKINGS</Typography>
            </Grid>
           </Grid>
           </Box>
        <Box sx={{padding:'0px 160px 40px',position:'relative',backgroundColor:'#f2f2f2' }} className='box2'>
           <Grid container style={{display:'flex',flexDirection:'column',backgroundColor:'#fff',borderRadius:'10px',boxShadow:'0 3px 30px 0 rgba(0,0,0,.1)',gap:'24px',padding:'40px 60px 30px'}} className='contcont'>
           <Grid item sx={{boxShadow:'0 3px 2px -2px rgba(0,0,0,.07), 0 1px 5px 0 rgba(74,74,74,.2), 0 2px 2px 0 rgba(74,74,74,.2)',display:'flex',flexDirection:'column'}}>
                <Grid container sx={{padding:'20px 50px',boxShadow:'0 1px 6px 0 rgba(0,0,0,.2)',display:'flex',flexDirection:'row',justifyContent:'space-between',gap:'20px'}} className='cont1' >
                   <Grid item sx={{display:'flex',flexDirection:'column'}}>
                     <Grid item >
                        <Typography sx={{fontWeight:'620',fontSize:'21px',padding:'5px 10px'}} className='facid'>#64f6ddad0d82f363145b79f5</Typography>
                     </Grid>
                     <Grid item sx={{display:'flex',flexDirection:'row',padding:'10px 10px 0px 10px',gap:'13px'}} className='hedstails'>
                        <Grid item>
                        <Typography color='green' sx={{fontSize:'14px',fontWeight:'700'}}>Approved</Typography>
                        </Grid>
                        <Grid item>
                        <Typography sx={{fontSize:'14px',fontWeight:'500'}}>Booked on 27/06/2023</Typography>
                        </Grid>
                        <Grid item>
                        <Typography sx={{fontSize:'14px',fontWeight:'300'}}>akarsh.1@iitj.ac.in</Typography>
                        </Grid>
                     </Grid>
                   </Grid>
                     <Grid item sx={{display:'flex',alignItems:'center'}}>
                        <Button
                            startIcon={<VisibilityIcon />}
                            sx={{
                                color: '#fff',
                                opacity: '.9',
                                boxShadow: '0 3px 4px 0 rgba(0, 0, 0, .2)',
                                backgroundColor: '#1976d2',
                                padding: '10px 20px',
                                borderRadius: '25px',
                                '&:hover': {
                                backgroundColor: '#1976d2', // Set the same color on hover to avoid the change
                                },
                            }}
                            >
                            View Booking
                            </Button>
                     </Grid>
                </Grid>
                <Grid item sx={{padding:'34px 55px 42px'}} className='cont2'>
                   <Grid container sx={{display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center',gap:'15px'}} className='botstails' >
                     <Grid item>
                        <Typography>From</Typography>
                        <Typography sx={{color:'#000',fontWeight:'500'}}>31 Jul 23 09:00 PM</Typography>
                     </Grid>
                     <Grid item>
                        <Typography>To</Typography>
                        <Typography sx={{color:'#000',fontWeight:'500'}}>4 Dec 23 09:00 PM</Typography>
                     </Grid>
                     <Grid item>
                        <Typography sx={{color:'#000',textAlign:'center',display:'flex',justifyContent:'center',alignItems:'center',fontWeight:'500'}}><AccountCircleIcon  sx={{color:'grey',marginRight:'5px'}}/>RSMAKARSH</Typography>
                     </Grid>
                     <Grid item>
                        <Typography>Rooms Allocated</Typography>
                        <Typography sx={{color:'#000',fontWeight:'500'}}>110,101</Typography>
                     </Grid>
                   </Grid>
                </Grid>
            </Grid>
            
            <Grid item sx={{boxShadow:'0 3px 2px -2px rgba(0,0,0,.07), 0 1px 5px 0 rgba(74,74,74,.2), 0 2px 2px 0 rgba(74,74,74,.2)',display:'flex',flexDirection:'column'}}>
                <Grid container sx={{padding:'20px 50px',boxShadow:'0 1px 6px 0 rgba(0,0,0,.2)',display:'flex',flexDirection:'row',justifyContent:'space-between',gap:'20px'}} className='cont1' >
                   <Grid item sx={{display:'flex',flexDirection:'column'}}>
                     <Grid item >
                        <Typography sx={{fontWeight:'620',fontSize:'21px',padding:'5px 10px'}} className='facid'>#64f6ddad0d82f363145b79f5</Typography>
                     </Grid>
                     <Grid item sx={{display:'flex',flexDirection:'row',padding:'10px 10px 0px 10px',gap:'13px'}} className='hedstails'>
                        <Grid item>
                        <Typography color='green' sx={{fontSize:'14px',fontWeight:'700'}}>Approved</Typography>
                        </Grid>
                        <Grid item>
                        <Typography sx={{fontSize:'14px',fontWeight:'500'}}>Booked on 27/06/2023</Typography>
                        </Grid>
                        <Grid item>
                        <Typography sx={{fontSize:'14px',fontWeight:'300'}}>akarsh.1@iitj.ac.in</Typography>
                        </Grid>
                     </Grid>
                   </Grid>
                     <Grid item sx={{display:'flex',alignItems:'center'}}>
                        <Button
                            startIcon={<VisibilityIcon />}
                            sx={{
                                color: '#fff',
                                opacity: '.9',
                                boxShadow: '0 3px 4px 0 rgba(0, 0, 0, .2)',
                                backgroundColor: '#1976d2',
                                padding: '10px 20px',
                                borderRadius: '25px',
                                '&:hover': {
                                backgroundColor: '#1976d2', // Set the same color on hover to avoid the change
                                },
                            }}
                            >
                            View Booking
                            </Button>
                     </Grid>
                </Grid>
                <Grid item sx={{padding:'34px 55px 42px'}} className='cont2'>
                   <Grid container sx={{display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center',gap:'15px'}} className='botstails' >
                     <Grid item>
                        <Typography>From</Typography>
                        <Typography sx={{color:'#000',fontWeight:'500'}}>31 Jul 23 09:00 PM</Typography>
                     </Grid>
                     <Grid item>
                        <Typography>To</Typography>
                        <Typography sx={{color:'#000',fontWeight:'500'}}>4 Dec 23 09:00 PM</Typography>
                     </Grid>
                     <Grid item>
                        <Typography sx={{color:'#000',textAlign:'center',display:'flex',justifyContent:'center',alignItems:'center',fontWeight:'500'}}><AccountCircleIcon  sx={{color:'grey',marginRight:'5px'}}/>RSMAKARSH</Typography>
                     </Grid>
                     <Grid item>
                        <Typography>Rooms Allocated</Typography>
                        <Typography sx={{color:'#000',fontWeight:'500'}}>110,101</Typography>
                     </Grid>
                   </Grid>
                </Grid>
            </Grid>

            <Grid item sx={{boxShadow:'0 3px 2px -2px rgba(0,0,0,.07), 0 1px 5px 0 rgba(74,74,74,.2), 0 2px 2px 0 rgba(74,74,74,.2)',display:'flex',flexDirection:'column'}}>
                <Grid container sx={{padding:'20px 50px',boxShadow:'0 1px 6px 0 rgba(0,0,0,.2)',display:'flex',flexDirection:'row',justifyContent:'space-between',gap:'20px'}} className='cont1' >
                   <Grid item sx={{display:'flex',flexDirection:'column'}}>
                     <Grid item >
                        <Typography sx={{fontWeight:'620',fontSize:'21px',padding:'5px 10px'}} className='facid'>#64f6ddad0d82f363145b79f5</Typography>
                     </Grid>
                     <Grid item sx={{display:'flex',flexDirection:'row',padding:'10px 10px 0px 10px',gap:'13px'}} className='hedstails'>
                        <Grid item>
                        <Typography color='green' sx={{fontSize:'14px',fontWeight:'700'}}>Approved</Typography>
                        </Grid>
                        <Grid item>
                        <Typography sx={{fontSize:'14px',fontWeight:'500'}}>Booked on 27/06/2023</Typography>
                        </Grid>
                        <Grid item>
                        <Typography sx={{fontSize:'14px',fontWeight:'300'}}>akarsh.1@iitj.ac.in</Typography>
                        </Grid>
                     </Grid>
                   </Grid>
                     <Grid item sx={{display:'flex',alignItems:'center'}}>
                        <Button
                            startIcon={<VisibilityIcon />}
                            sx={{
                                color: '#fff',
                                opacity: '.9',
                                boxShadow: '0 3px 4px 0 rgba(0, 0, 0, .2)',
                                backgroundColor: '#1976d2',
                                padding: '10px 20px',
                                borderRadius: '25px',
                                '&:hover': {
                                backgroundColor: '#1976d2', // Set the same color on hover to avoid the change
                                },
                            }}
                            >
                            View Booking
                            </Button>
                     </Grid>
                </Grid>
                <Grid item sx={{padding:'34px 55px 42px'}} className='cont2'>
                   <Grid container sx={{display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center',gap:'15px'}} className='botstails' >
                     <Grid item>
                        <Typography>From</Typography>
                        <Typography sx={{color:'#000',fontWeight:'500'}}>31 Jul 23 09:00 PM</Typography>
                     </Grid>
                     <Grid item>
                        <Typography>To</Typography>
                        <Typography sx={{color:'#000',fontWeight:'500'}}>4 Dec 23 09:00 PM</Typography>
                     </Grid>
                     <Grid item>
                        <Typography sx={{color:'#000',textAlign:'center',display:'flex',justifyContent:'center',alignItems:'center',fontWeight:'500'}}><AccountCircleIcon  sx={{color:'grey',marginRight:'5px'}}/>RSMAKARSH</Typography>
                     </Grid>
                     <Grid item>
                        <Typography>Rooms Allocated</Typography>
                        <Typography sx={{color:'#000',fontWeight:'500'}}>110,101</Typography>
                     </Grid>
                   </Grid>
                </Grid>
            </Grid>

            <Grid item sx={{boxShadow:'0 3px 2px -2px rgba(0,0,0,.07), 0 1px 5px 0 rgba(74,74,74,.2), 0 2px 2px 0 rgba(74,74,74,.2)',display:'flex',flexDirection:'column'}}>
                <Grid container sx={{padding:'20px 50px',boxShadow:'0 1px 6px 0 rgba(0,0,0,.2)',display:'flex',flexDirection:'row',justifyContent:'space-between',gap:'20px'}} className='cont1' >
                   <Grid item sx={{display:'flex',flexDirection:'column'}}>
                     <Grid item >
                        <Typography sx={{fontWeight:'620',fontSize:'21px',padding:'5px 10px'}} className='facid'>#64f6ddad0d82f363145b79f5</Typography>
                     </Grid>
                     <Grid item sx={{display:'flex',flexDirection:'row',padding:'10px 10px 0px 10px',gap:'13px'}} className='hedstails'>
                        <Grid item>
                        <Typography color='green' sx={{fontSize:'14px',fontWeight:'700'}}>Approved</Typography>
                        </Grid>
                        <Grid item>
                        <Typography sx={{fontSize:'14px',fontWeight:'500'}}>Booked on 27/06/2023</Typography>
                        </Grid>
                        <Grid item>
                        <Typography sx={{fontSize:'14px',fontWeight:'300'}}>akarsh.1@iitj.ac.in</Typography>
                        </Grid>
                     </Grid>
                   </Grid>
                     <Grid item sx={{display:'flex',alignItems:'center'}}>
                        <Button
                            startIcon={<VisibilityIcon />}
                            sx={{
                                color: '#fff',
                                opacity: '.9',
                                boxShadow: '0 3px 4px 0 rgba(0, 0, 0, .2)',
                                backgroundColor: '#1976d2',
                                padding: '10px 20px',
                                borderRadius: '25px',
                                '&:hover': {
                                backgroundColor: '#1976d2', // Set the same color on hover to avoid the change
                                },
                            }}
                            >
                            View Booking
                            </Button>
                     </Grid>
                </Grid>
                <Grid item sx={{padding:'34px 55px 42px'}} className='cont2'>
                   <Grid container sx={{display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center',gap:'15px'}} className='botstails' >
                     <Grid item>
                        <Typography>From</Typography>
                        <Typography sx={{color:'#000',fontWeight:'500'}}>31 Jul 23 09:00 PM</Typography>
                     </Grid>
                     <Grid item>
                        <Typography>To</Typography>
                        <Typography sx={{color:'#000',fontWeight:'500'}}>4 Dec 23 09:00 PM</Typography>
                     </Grid>
                     <Grid item>
                        <Typography sx={{color:'#000',textAlign:'center',display:'flex',justifyContent:'center',alignItems:'center',fontWeight:'500'}}><AccountCircleIcon  sx={{color:'grey',marginRight:'5px'}}/>RSMAKARSH</Typography>
                     </Grid>
                     <Grid item>
                        <Typography>Rooms Allocated</Typography>
                        <Typography sx={{color:'#000',fontWeight:'500'}}>110,101</Typography>
                     </Grid>
                   </Grid>
                </Grid>
            </Grid>

            <Grid item sx={{boxShadow:'0 3px 2px -2px rgba(0,0,0,.07), 0 1px 5px 0 rgba(74,74,74,.2), 0 2px 2px 0 rgba(74,74,74,.2)',display:'flex',flexDirection:'column'}}>
                <Grid container sx={{padding:'20px 50px',boxShadow:'0 1px 6px 0 rgba(0,0,0,.2)',display:'flex',flexDirection:'row',justifyContent:'space-between',gap:'20px'}} className='cont1' >
                   <Grid item sx={{display:'flex',flexDirection:'column'}}>
                     <Grid item >
                        <Typography sx={{fontWeight:'620',fontSize:'21px',padding:'5px 10px'}} className='facid'>#64f6ddad0d82f363145b79f5</Typography>
                     </Grid>
                     <Grid item sx={{display:'flex',flexDirection:'row',padding:'10px 10px 0px 10px',gap:'13px'}} className='hedstails'>
                        <Grid item>
                        <Typography color='green' sx={{fontSize:'14px',fontWeight:'700'}}>Approved</Typography>
                        </Grid>
                        <Grid item>
                        <Typography sx={{fontSize:'14px',fontWeight:'500'}}>Booked on 27/06/2023</Typography>
                        </Grid>
                        <Grid item>
                        <Typography sx={{fontSize:'14px',fontWeight:'300'}}>akarsh.1@iitj.ac.in</Typography>
                        </Grid>
                     </Grid>
                   </Grid>
                     <Grid item sx={{display:'flex',alignItems:'center'}}>
                        <Button
                            startIcon={<VisibilityIcon />}
                            sx={{
                                color: '#fff',
                                opacity: '.9',
                                boxShadow: '0 3px 4px 0 rgba(0, 0, 0, .2)',
                                backgroundColor: '#1976d2',
                                padding: '10px 20px',
                                borderRadius: '25px',
                                '&:hover': {
                                backgroundColor: '#1976d2', // Set the same color on hover to avoid the change
                                },
                            }}
                            >
                            View Booking
                            </Button>
                     </Grid>
                </Grid>
                <Grid item sx={{padding:'34px 55px 42px'}} className='cont2'>
                   <Grid container sx={{display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center',gap:'15px'}} className='botstails' >
                     <Grid item>
                        <Typography>From</Typography>
                        <Typography sx={{color:'#000',fontWeight:'500'}}>31 Jul 23 09:00 PM</Typography>
                     </Grid>
                     <Grid item>
                        <Typography>To</Typography>
                        <Typography sx={{color:'#000',fontWeight:'500'}}>4 Dec 23 09:00 PM</Typography>
                     </Grid>
                     <Grid item>
                        <Typography sx={{color:'#000',textAlign:'center',display:'flex',justifyContent:'center',alignItems:'center',fontWeight:'500'}}><AccountCircleIcon  sx={{color:'grey',marginRight:'5px'}}/>RSMAKARSH</Typography>
                     </Grid>
                     <Grid item>
                        <Typography>Rooms Allocated</Typography>
                        <Typography sx={{color:'#000',fontWeight:'500'}}>110,101</Typography>
                     </Grid>
                   </Grid>
                </Grid>
            </Grid>

           </Grid>
        </Box>
        {/* <Box sx={{textAlign:'center'}}>
        <img src={nodataGif} alt="No Bookings Yet" style={{maxHeight:'700px',minHeight:'400px !important'}}/>
        </Box> */}
        
    </Box>
  );
}

