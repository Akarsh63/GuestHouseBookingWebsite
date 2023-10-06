import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Checkbox, FormControlLabel, FormGroup, FormLabel, Grid, TextField, Typography } from '@mui/material'
import React, { useState,useEffect } from 'react'
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import MenuItem from '@mui/material/MenuItem';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import './facultyform.css';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import dayjs from 'dayjs';import { useParams } from 'react-router-dom';

import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Modal from '@mui/material/Modal';
import Divider from "@mui/material/Divider";
import Slide from "@mui/material/Slide";
import CloseIcon from "@mui/icons-material/Close";
import './facultyform.css'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import moment from 'moment';
import { useCookies } from 'react-cookie';

export default function Facultyform() {
  const [cookies] = useCookies(['faculty_access_token','userid']);
  const userId=cookies.userid;
    //useEffect(()=>{if(!cookies.faculty_access_token){navigate('/faculty-login')}})
  const steps = ['Fill the details', 'Add your preferences', 'Final'];
  const [activeStep, setActiveStep] = useState(0);
  const [show, setShow] = useState(false);
  const toggleModal = () => setShow(!show);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  const navigate = useNavigate();
  const handleReset = (route) => {
    // alert('Completed Booking!')
    navigate(route);
  };
  // console.log(userId);
  //const { userId } = useParams();
  const [selectedStartDate,setselectedStartDate]=useState(null);
  const [selectedEndDate,setselectedEndDate]=useState(null);
  const [doubleRooms,setdoubleRooms]=useState([])
   const [singleRooms,setsingleRooms]=useState([]);
   const [deluxeRooms,setdeluxeRooms]=useState([]);
   const [availableRooms,setAvailableRooms]=useState([]);
  useEffect(() => {
    const fetchAvailableRooms = async () => {
      //e.preventdefault();
        try {
          console.log("ho");
          const roomsResponse = await axios.get(`http://localhost:8082/rooms/allrooms`, {
            headers: {
              'x-token': cookies.faculty_access_token
            }
          });
          // const newdeluxe = roomsResponse.data.alldeluxerooms;
          // const newdouble = roomsResponse.data.alldoublerooms;
          // const newsingle = roomsResponse.data.allsinglerooms;
          // console.log(newdeluxe);
          // console.log(newdouble);
          // console.log(newsingle);
          const allRooms = roomsResponse.data.allrooms;
          console.log(allRooms)

          const bookingsResponse = await axios.get(`http://localhost:8082/bookings/book`, {
            headers: {
              'x-token': cookies.faculty_access_token
            }
          });
          // const userresponse= await axios.get(`http://localhost:8082/users/facultylogin`, {
          //   headers: {
          //     'x-token': cookies.faculty_access_token
          //   }
          // });
          const bookings = bookingsResponse.data.Bookings;
          console.log(bookings);
           //const alllRooms=[];
           //allRooms.push({newdeluxe,newdouble,newsingle});
             console.log(allRooms);
          const availablerooms = allRooms.filter((room) => {
            const booked = bookings.some((booking) => {
              const bookedIn = dayjs(booking.fromdate).format('DD-MM-YYYY');
              const bookedOut = dayjs(booking.enddate).format('DD-MM-YYYY');
              const checkIn = dayjs(selectedStartDate).format('DD-MM-YYYY');
              const checkOut = dayjs(selectedEndDate).format('DD-MM-YYYY');
              
            //   console.log(checkIn);
            //  console.log(bookedIn);
             if (booking.rooms.includes(room.roomnumber)) {
              if (
                (checkIn <= bookedOut && checkIn >= bookedIn) ||
                (checkOut >= bookedIn && checkOut <= bookedOut) ||
                (bookedIn <= checkOut && bookedIn >= checkIn) ||
                (bookedOut >= checkIn && bookedOut <= checkOut)
              ){
                if(booking.status==="Approved" || booking.status==="Pending") {

                    return true;
                }else{
                  return false;
                }
              
              }else{
                  return false;
              }
            }
            else{
              return false;
            }
            
          });
    
          return !booked ;
        });
    
        setAvailableRooms(availablerooms);
        console.log(availableRooms);
      
    const availableDoubleRooms = availablerooms.filter((room) => room.options === 'Double');
          //console.log("h");
    setdoubleRooms(availableDoubleRooms);
    console.log(doubleRooms)
    const availableSingleRooms = availablerooms.filter((room) => room.options === 'Single');
    setsingleRooms(availableSingleRooms);
    console.log(singleRooms)
    const availableDeluxeRooms = availablerooms.filter((room) => room.options === 'Deluxe');
    setdeluxeRooms(availableDeluxeRooms);
    console.log(deluxeRooms)
        } catch (error) {
          console.log("Error fetching available rooms:", error);
        }
      };
      

    if (selectedStartDate!=null && selectedEndDate!=null) {
      fetchAvailableRooms();
    }
  }, [selectedStartDate, selectedEndDate]);
   console.log(userId);
  const [detail,setdetail]=useState({fname1:'',lname1:'',email:"",phone:'',address:'',person:'',roomstype:[],roomnumber:[],meal:'',purpose:'',request:''});
  const handleFormSubmission = async () => {
    // Validate the form data if needed
    
    try {
      console.log("22");
      const response = await axios.post(
        'http://localhost:8082/bookings/bookss',
        {
          firstname: detail.fname1,
          lastname: detail.lname1,
          email: detail.email,
          phone: detail.phone,
          address: detail.address,
          roomnumber: detail.roomnumber,
          roomstype: detail.roomstype,
          person: detail.person,
          meals:detail.meal,
          //purpose: detail.purpose,
          specialrequest:detail.request,
          userType:'faculty',
          fromdate:selectedStartDate,
          enddate:selectedEndDate,
          userId:userId,
          // Add any other fields you need to send
        },
        // {
        //   headers: {
        //     'x-token': cookies.admin_access_token, // Replace with your authentication token
        //   },
        // }
      );
  
      // Handle a successful response here
      console.log('POST request successful', response.data);
      alert('Booking Completed');
      setdetail({
        fname1: '',
        lname1: '',
        email: '',
        phone: '',
        address: '',
        roomnumber: [],
        roomstype: [],
        person: '',
        meal:'',
        //purpose: '',
      });
      setAvailableRooms([]);
      setselectedStartDate('');
      setselectedEndDate('');

    } catch (error) {
      // Handle errors here
      console.error('Error making POST request', error);
      if (error.response) {
        console.error('Response Data:', error.response.data);
        console.error('Response Status:', error.response.status);
      }
    }
  };
  console.log("21");

  const renderStepContent = (stepIndex) => {
    switch (stepIndex) {
        case 0:
        return (
          <Grid container sx={{ display: 'flex !important', flexDirection: 'column', gap: '30px',padding:'30px 20px 10px',width:'1005' }}>
           <Typography>Pickup the Start and End dates</Typography>
           <Grid item sx={{display:'flex',flexDirection:'row',gap:'80px'}} className='page1'>
           <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer
                components={[
                  'DatePicker'
                ]}
              >
                <DemoItem label="Start Date">
                  <DatePicker 
                  //defaultValue={dayjs('2022-04-17')} 
                  value={selectedStartDate}
                  onChange={(date)=>setselectedStartDate(date)}
                  />
                </DemoItem>
              </DemoContainer>
            </LocalizationProvider>
            
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer
                components={[
                  'DatePicker'
                ]}
              >
                <DemoItem label="End Date">
                  <DatePicker 
                   value={selectedEndDate}
                   onChange={(date)=>setselectedEndDate(date)}
                   //defaultValue={dayjs('2022-04-17')} 
                   />
                </DemoItem>
              </DemoContainer>
            </LocalizationProvider>
            </Grid>
          </Grid>
        );
      case 1:
        return (
          <Grid container sx={{ display: 'flex !important', flexDirection: 'row', justifyContent: 'space-between', gap: '60px',padding:'30px 20px 10px' }} className='page2'>
           <Grid item>
            <Typography style={{fontSize:'17px',marginBottom:'5px'}}>First Name</Typography>
            <TextField type="text" variant='outlined'   value={detail.fname1} onChange={(event)=>setdetail({...detail,fname1:event.target.value})} placeholder="First name" sx={{width:'320px'}} className='textfeild'/>
            
        </Grid>
        <Grid item>
            <Typography style={{fontSize:'17px',marginBottom:'5px'}}>Last name</Typography>
            <TextField type="text" variant='outlined'   value={detail.lname1} onChange={(event)=>setdetail({...detail,lname1:event.target.value})} placeholder="Last name" sx={{width:'320px'}} className='textfeild'/>
        </Grid>

        <Grid item>
            <Typography style={{fontSize:'17px',marginBottom:'5px'}}>Email</Typography>
            <TextField type="text" value={detail.email} onChange={(event)=>setdetail({...detail,email:event.target.value})} variant='outlined' placeholder="Email" sx={{width:'320px'}} className='textfeild'/>
        </Grid>
        <Grid item>
            <Typography style={{fontSize:'17px',marginBottom:'5px'}}>Phone number</Typography>
            <TextField
                    type="text"
                    variant='outlined'
                    placeholder="Phone number"
                    value={detail.phone}
                    onChange={(event)=>setdetail({...detail,phone:event.target.value})}
                    sx={{
                      width: '320px',
                      
                    }}
                    className='textfeild'
                  />

        </Grid>
        <Grid item>
            <Typography style={{fontSize:'17px',marginBottom:'5px'}}>Current Address</Typography>
            <TextField type="text" variant='outlined'   value={detail.address} onChange={(event)=>setdetail({...detail,address:event.target.value})}  placeholder="Address" sx={{width:'320px'}} className='textfeild'/>
        </Grid>
        <Grid item>
            <Typography style={{fontSize:'17px',marginBottom:'5px'}}>Purpose</Typography>
            <TextField type="text" variant='outlined'   value={detail.purpose} onChange={(event)=>setdetail({...detail,purpose:event.target.value})} placeholder="Purpose" sx={{width:'320px'}} className='textfeild'/>
        </Grid>
          </Grid>
        );
        // console.log(detail)
      case 2:
        return (
          <Grid container   sx={{ display: 'flex !important', flexDirection: 'column', gap: '35px',padding:'30px 20px 10px' }}>
            <Grid item sx={{ display: 'flex',flexDirection:'row',width:'100%'}}>
            <FormControl sx={{ display: 'flex',flexDirection:'row',gap:'10px',alignItems:'center'}} size="small">
                <Typography>Choose number of persons:</Typography>
                <Select sx={{padding:'0px 7px'}} value={detail.person} onChange={(e)=>setdetail({...detail,person:e.target.value})}>
                    <MenuItem value={1} >1 Person</MenuItem>
                    <MenuItem value={2}>2 Persons</MenuItem>
                    <MenuItem value={3}>3 Persons</MenuItem>
                    <MenuItem value={4}>4 Persons</MenuItem>
                    <MenuItem value={5}>5 Persons</MenuItem>
                    <MenuItem value={6}>6 Persons</MenuItem>
                    <MenuItem value={7}>7 Persons</MenuItem>
                    <MenuItem value={8}>8 Persons</MenuItem>
                </Select>
            </FormControl>
            </Grid>
            <Grid item sx={{ display: 'flex',flexDirection:'column',width:'100%'}}>
                <Typography>Select the rooms from below</Typography>
                <Grid container sx={{display:'flex',gap:'10px',flexDirection:'column',marginTop:'5px'}}>
                    <Grid item>
                        <Accordion>
                            <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                            >
                            <Typography>Double Rooms</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                            <FormGroup>
                              
                                <Typography sx={{marginBottom:'10px'}}>Our Double room is large and comfortable. It's spacious enough for two adults and comfortable. The room is thoughtfully furnished and equipped with all the essentials for a pleasant stay.</Typography>
                                
                                {
                                  
                                doubleRooms.map((doubleroom)=>{
                                  console.log(doubleRooms);
                                    return <FormControlLabel control={<Checkbox
                                      checked={detail.roomnumber === doubleroom.roomnumber}
                                      onChange={(e) => {
                                        const newRoomNumber = e.target.checked ? doubleroom.roomnumber : '';
                                        setdetail({ ...detail, roomnumber: newRoomNumber });
                                      }}
                                      value={doubleroom.roomnumber}
                                    />}
                                    label={doubleroom.roomnumber} />
                                })}
                            </FormGroup>
                            </AccordionDetails>
                        </Accordion>
                    </Grid>

                    <Grid item>
                        <Accordion>
                            <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                            >
                            <Typography value="single">Single Rooms</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                            <FormGroup>
                            <Typography sx={{marginBottom:'10px'}}>Our Sinle room is large and comfortable. It's spacious enough for one adult and comfortable. The room is thoughtfully furnished and equipped with all the essentials for a pleasant stay.</Typography>
                                {singleRooms.map((singleroom)=>{
                                    return <FormControlLabel
                                    control={<Checkbox
                                      checked={detail.roomnumber === singleroom.roomnumber}
                                      onChange={(e) => {
                                        const newRoomNumber = e.target.checked ? singleroom.roomnumber : '';
                                        setdetail({ ...detail, roomnumber: newRoomNumber });
                                      }}
                                      value={singleroom.roomnumber}
                                    />}
                                    label={singleroom.roomnumber}
                                  />
                                })}
                            </FormGroup>
                            </AccordionDetails>
                        </Accordion>
                    </Grid>
                    <Grid item>
                        <Accordion>
                            <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                            >
                            <Typography>Deluxe Rooms</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                            <FormGroup>
                            <Typography sx={{marginBottom:'10px'}}>Our Deluxe room is large and comfortable. It's spacious enough for four adults and comfortable. The room is thoughtfully furnished and equipped with all the essentials for a pleasant stay.</Typography>
                                {deluxeRooms.map((deluxeroom)=>{
                                    return <FormControlLabel control={<Checkbox
                                      checked={detail.roomnumber === deluxeroom.roomnumber}
                                      onChange={(e) => {
                                        const newRoomNumber = e.target.checked ? deluxeroom.roomnumber : '';
                                        setdetail({ ...detail, roomnumber: newRoomNumber });
                                      }}
                                      value={deluxeroom.roomnumber}
                                    />}
                                    label={deluxeroom.roomnumber} />
                                })}
                            </FormGroup>
                            </AccordionDetails>
                        </Accordion>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item>
            <FormControl>
                <FormLabel id="demo-controlled-radio-buttons-group">Choose the Meal Plan</FormLabel>
                <RadioGroup
                    aria-labelledby="demo-controlled-radio-buttons-group"
                    name="controlled-radio-buttons-group"
                    value={detail.meal} // Make sure to set the value to the current state value
                    onChange={(event) => setdetail({ ...detail, meal: event.target.value })}>
                    <FormControlLabel value="roomonly"  control={<Radio />} label="Room Only" />
                    <FormControlLabel value="breakfast" control={<Radio />} label="Breakfast" />
                    <FormControlLabel value="brunch" control={<Radio />} label="Brunch (Breakfast and Lunch)" />
                    <FormControlLabel value="threesquaremeals" control={<Radio />} label="Three square meals" />
                </RadioGroup>
            </FormControl>
            </Grid>
          </Grid>
        );
      
      default:
        return null;
    }
  };
  return (
    <Box sx={{ width: '100%', padding: '70px 90px' }} className='mainbox'>
      <Modal open={show} onClose={toggleModal} sx={{ display: "grid", placeItems: "center" }}>
          <Slide direction="down" in={show} timeout={500}>
            <Box
              position="relative"
              maxWidth="500px"
              display="flex"
              flexDirection="column"
              borderRadius="xl"
              shadow="xl"
              style={{margin:'0 10px'}}
              sx={{backgroundColor:'white'}}
            >
              <Box display="flex" alginItems="center" justifyContent="space-between" p={2}>
                <Typography variant="h5">Confirm your Booking</Typography>
                <CloseIcon fontSize="medium" sx={{ cursor: "pointer" }} onClick={toggleModal} />
              </Box>
              <Divider sx={{ my: 0 }} />
              <Box p={2} >
                <Typography variant="body2" sx={{color:'#333'}} fontWeight="regular">
                  You can't make changes in the booking further.
                  Are you sure to confirm the booking?
                  <br />
                </Typography>
              </Box>
              <Divider sx={{ my: 0 }} />
              <Box display="flex" justifyContent="space-between" p={1.5}>
                <Button variant="gradient" color="dark" onClick={toggleModal}>
                  Close
                </Button>
                <Button variant="gradient" color="info" onClick={() => { handleNext(); toggleModal(); }}>

                  Book Now
                </Button>
              </Box>
            </Box>
          </Slide>
        </Modal>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1,padding:'30px 20px 10px' }} >
            All steps completed - you&apos;re finished
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button onClick={()=>{handleReset('/faculty/bookings')}}>Go to Bookings Page</Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          {renderStepContent(activeStep)}
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button
              onClick={() => {
                if (activeStep === steps.length - 1) {
                  toggleModal(); 
                  handleFormSubmission();
                } else {
                  handleNext();
                }
              }}
            >
              {activeStep === steps.length - 1 ? 'Book' : 'Next'}
            </Button>

          </Box>
        </React.Fragment>
      )}
    </Box>
  );
}