// import { Box, Button, Grid, Typography } from '@mui/material';
// import nodataGif from '../images/nodata.svg';
// import './facultybooking.css';
// import VisibilityIcon from '@mui/icons-material/Visibility';
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';
// import { useEffect, useState } from 'react';
// import Modal from '@mui/material/Modal';
// import CloseIcon from '@mui/icons-material/Close';
// import axios from 'axios';
// import { useCookies } from 'react-cookie';
// import { useRevalidator } from 'react-router-dom';




// const style = {
//   position: 'absolute',
//   top: '50%',
//   left: '50%',
//   transform: 'translate(-50%, -50%)',
//   width: 400,
//   borderRadius: "10px",
//   bgcolor: 'background.paper',
//   boxShadow: 24,
//   // p: 3,
//   width: '550px'
// };

// export default function Facultybookings() {
//   const [cookies, setCookie, removeCookie] = useCookies(['access_token', 'userid']);
//   //const [cookies, setCookie] = useCookies(['userid']);
//   console.log(cookies.userid)
//   const [open, setOpen] = useState(false);
//   // const navigate = useNavigate();

//   const handleopen = () => {
//     setOpen(true);
//   }
//   const handleclose = () => {
//     setOpen(false);
//   }

//   return (

//     <Box sx={{ backgroundColor: '#f2f2f2' }} >
//       <Box sx={{ padding: '50px 160px 0px', position: 'sticky', zIndex: 2, top: '70px', backgroundColor: '#afb3ba' }} className='box1'>
//         <Grid container style={{ display: 'flex', flexDirection: 'column', backgroundColor: '#fff', borderRadius: '8px 8px 0 0 ', boxShadow: '0 2px 20px 0 rgba(0,0,0,.1)', padding: '20px 20px 30px' }} >
//           <Grid item style={{ textAlign: 'center', }}>
//             <Typography style={{ color: '#000', fontWeight: '500', fontSize: '23px' }}>ALL BOOKINGS</Typography>
//           </Grid>
//         </Grid>
//       </Box>
//       <Box sx={{ padding: '0px 160px 40px', position: 'relative', backgroundColor: '#f2f2f2' }} className='box2'>
//         <Grid container style={{ display: 'flex', flexDirection: 'column', backgroundColor: '#fff', borderRadius: '10px', boxShadow: '0 3px 30px 0 rgba(0,0,0,.1)', gap: '24px', padding: '40px 60px 30px' }} className='contcont'>
//           <Grid item sx={{ boxShadow: '0 3px 2px -2px rgba(0,0,0,.07), 0 1px 5px 0 rgba(74,74,74,.2), 0 2px 2px 0 rgba(74,74,74,.2)', display: 'flex', flexDirection: 'column' }}>
//             <Grid container sx={{ padding: '20px 50px', boxShadow: '0 1px 6px 0 rgba(0,0,0,.2)', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', gap: '20px' }} className='cont1' >
//               <Grid item sx={{ display: 'flex', flexDirection: 'column' }}>
//                 <Grid item >
//                   <Typography sx={{ fontWeight: '620', fontSize: '21px', padding: '5px 10px' }} className='facid'>#64f6ddad0d82f363145b79f5</Typography>
//                 </Grid>
//                 <Grid item sx={{ display: 'flex', flexDirection: 'row', padding: '10px 10px 0px 10px', gap: '13px' }} className='hedstails'>
//                   <Grid item>
//                     <Typography color='green' sx={{ fontSize: '14px', fontWeight: '700' }}>Approved</Typography>
//                   </Grid>
//                   <Grid item>
//                     <Typography sx={{ fontSize: '14px', fontWeight: '500' }}>Booked on 27/06/2023</Typography>
//                   </Grid>
//                   <Grid item>
//                     <Typography sx={{ fontSize: '14px', fontWeight: '300' }}>akarsh.1@iitj.ac.in</Typography>
//                   </Grid>
//                 </Grid>
//               </Grid>
//               <Grid item sx={{ display: 'flex', alignItems: 'center' }}>
//                 <Button
//                   startIcon={<VisibilityIcon />}
//                   onClick={handleopen}
//                   sx={{
//                     color: '#fff',
//                     opacity: '.9',
//                     boxShadow: '0 3px 4px 0 rgba(0, 0, 0, .2)',
//                     backgroundColor: '#1976d2',
//                     padding: '10px 20px',
//                     borderRadius: '25px',
//                     '&:hover': {
//                       backgroundColor: '#1976d2', // Set the same color on hover to avoid the change
//                     },
//                   }}
//                 >

//                   View Booking

//                   console.log(response.data);

//                   if (response.data.Bookings.length === 0) {
//                     setnobookings(true);
//        }

//                   setbookings([...response.data.Bookings].reverse());
//                   setloading(false);
//      } catch (error) {
//                     console.error('Error fetching bookings:', error);
//                   setloading(false);
//      }
//    }

//                   fetchBookings();
//     },[])
//                   return (
//                   <Box sx={{ backgroundColor: '#f2f2f2' }}>
//                     <Box sx={{ padding: '50px 160px 0px', position: 'sticky', zIndex: 2, top: '70px', backgroundColor: '#afb3ba' }} className='box1'>
//                       <Grid container style={{ display: 'flex', flexDirection: 'column', backgroundColor: '#fff', borderRadius: '8px 8px 0 0', boxShadow: '0 2px 20px 0 rgba(0,0,0,.1)', padding: '20px 20px 30px' }}>
//                         <Grid item style={{ textAlign: 'center' }}>
//                           <Typography style={{ color: '#000', fontWeight: '500', fontSize: '23px' }}>ALL BOOKINGS</Typography>
//                         </Grid>
//                       </Grid>
//                     </Box>

//                     <Box sx={{ padding: '0px 160px 40px', position: 'relative', backgroundColor: '#f2f2f2' }} className='box2'>
//                       <Grid container style={{ display: 'flex', flexDirection: 'column', backgroundColor: '#fff', borderRadius: '10px', boxShadow: '0 3px 30px 0 rgba(0,0,0,.1)', gap: '24px', padding: '40px 60px 30px' }} className='contcont'>
//                         <Grid item sx={{ boxShadow: '0 3px 2px -2px rgba(0,0,0,.07), 0 1px 5px 0 rgba(74,74,74,.2)', display: 'flex', flexDirection: 'column' }}>
//                           <Grid container sx={{ padding: '20px 50px', boxShadow: '0 1px 6px 0 rgba(0,0,0,.2)', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', gap: '20px' }} className='cont1'>
//                             <Grid item sx={{ display: 'flex', flexDirection: 'column' }}>
//                               <Grid item>
//                                 <Typography sx={{ fontWeight: '620', fontSize: '21px', padding: '5px 10px' }} className='facid'></Typography>
//                               </Grid>
//                               <Grid item sx={{ display: 'flex', flexDirection: 'row', padding: '10px 10px 0px 10px', gap: '13px' }} className='hedstails'>
//                                 <Grid item>
//                                   <Typography color='green' sx={{ fontSize: '14px', fontWeight: '700' }}>Approved</Typography>
//                                 </Grid>
//                                 <Grid item>
//                                   <Typography sx={{ fontSize: '14px', fontWeight: '500' }}>Booked on 27/06/2023</Typography>
//                                 </Grid>
//                                 <Grid item>
//                                   <Typography sx={{ fontSize: '14px', fontWeight: '300' }}></Typography>
//                                 </Grid>
//                               </Grid>
//                             </Grid>
//                             <Grid item sx={{ display: 'flex', alignItems: 'center' }}>
//                               <Button
//                                 startIcon={<VisibilityIcon />}
//                                 onClick={handleopen}
//                                 sx={{
//                                   color: '#fff',
//                                   opacity: '.9',
//                                   boxShadow: '0 3px 4px 0 rgba(0, 0, 0, .2)',
//                                   backgroundColor: '#1976d2',
//                                   padding: '10px 20px',
//                                   borderRadius: '25px',
//                                   '&:hover': {
//                                     backgroundColor: '#1976d2', // Set the same color on hover to avoid the change
//                                   }
//                                 }}
//                               >
//                                 View Booking
//                               </Button>
//                               <Grid>
//                                 <Modal
//                                   open={open}
//                                   onClose={handleclose}
//                                   aria-labelledby="Details"
//                                   aria-describedby="Description"
//                                 >
//                                   <Box sx={style}>
//                                     <Grid className='facbookdet' style={{ backgroundColor: "#48494B", display: "flex", justifyContent: "space-between" }}>
//                                       <Typography id="Details" variant="h6" component="h1" style={{ fontWeight: "bold", fontSize: "25px", color: "white", marginLeft: "10px" }}>
//                                         Bookings
//                                       </Typography>
//                                       <Typography style={{ marginRight: "10px", cursor: "pointer" }}>
//                                         <CloseIcon onClick={handleclose} />
//                                       </Typography>
//                                     </Grid>
//                                     <Grid style={{ backgroundColor: "#EEEEEE", marginBottom: "60px", marginTop: "40px", padding: "25px" }}>
//                                       <Typography style={{ fontWeight: "bold", fontSize: "20px", color: "#48494B" }}>Details</Typography>
//                                       <Grid style={{ padding: "0px", backgroundColor: "#EEEEEE" }}>
//                                         <Typography id="Description" sx={{ mt: 2 }}>
//                                           {/* Check if there are bookings */}
//                                           {nobookings ? (
//                                             <p>No bookings made</p>
//                                           ) : (
//                                             // Render bookings here
//                                             <div>
//                                               {allbookings.map((booking, index) => (
//                                                 <div key={index}>
//                                                   <Typography style={{ color: "black", fontSize: "15px" }}>
//                                                     Name: {booking.name}
//                                                   </Typography>
//                                                   <Typography style={{ color: "black", fontSize: "15px" }}>
//                                                     Email: {booking.email}
//                                                   </Typography>
//                                                   <Typography style={{ color: "black", fontSize: "15px" }}>
//                                                     Phone number: {booking.phoneNumber}
//                                                   </Typography>
//                                                   <Typography style={{ color: "black", fontSize: "15px" }}>
//                                                     Address: {booking.address}
//                                                   </Typography>
//                                                   {/* Add additional details as needed */}
//                                                 </div>
//                                               ))}
//                                             </div>
//                                           )}
//                                         </Typography>
//                                       </Grid>
//                                     </Grid>
//                                   </Box>
//                                 </Modal>
//                               </Grid>
//                             </Gri
