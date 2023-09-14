import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Checkbox, FormControlLabel, FormGroup, FormLabel, Grid, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
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
import dayjs from 'dayjs';
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
export default function Facultyform() {
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
  const [doubleRooms]=useState(['101','102','103']);
  const [singleRooms]=useState(['104','105','106']);
  const [deluxeRooms]=useState(['107','108','109']);
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
                  <DatePicker defaultValue={dayjs('2022-04-17')} />
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
                  <DatePicker defaultValue={dayjs('2022-04-17')} />
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
            <TextField type="text" variant='outlined' placeholder="First name" sx={{width:'320px'}} className='textfeild'/>
            
        </Grid>
        <Grid item>
            <Typography style={{fontSize:'17px',marginBottom:'5px'}}>Last name</Typography>
            <TextField type="text" variant='outlined' placeholder="Last name" sx={{width:'320px'}} className='textfeild'/>
        </Grid>

        <Grid item>
            <Typography style={{fontSize:'17px',marginBottom:'5px'}}>Email</Typography>
            <TextField type="text" variant='outlined' placeholder="Email" sx={{width:'320px'}} className='textfeild'/>
        </Grid>
        <Grid item>
            <Typography style={{fontSize:'17px',marginBottom:'5px'}}>Phone number</Typography>
            <TextField
  type="text"
  variant='outlined'
  placeholder="Phone number"
  sx={{
    width: '320px',
    
  }}
  className='textfeild'
/>

        </Grid>
        <Grid item>
            <Typography style={{fontSize:'17px',marginBottom:'5px'}}>Current Address</Typography>
            <TextField type="text" variant='outlined' placeholder="Address" sx={{width:'320px'}} className='textfeild'/>
        </Grid>
        <Grid item>
            <Typography style={{fontSize:'17px',marginBottom:'5px'}}>Purpose</Typography>
            <TextField type="text" variant='outlined' placeholder="Purpose" sx={{width:'320px'}} className='textfeild'/>
        </Grid>
          </Grid>
        );
      case 2:
        return (
          <Grid container   sx={{ display: 'flex !important', flexDirection: 'column', gap: '35px',padding:'30px 20px 10px' }}>
            <Grid item sx={{ display: 'flex',flexDirection:'row',width:'100%'}}>
            <FormControl sx={{ display: 'flex',flexDirection:'row',gap:'10px',alignItems:'center'}} size="small">
                <Typography>Choose number of persons:</Typography>
                <Select sx={{padding:'0px 7px'}}>
                    <MenuItem value={1}>1 Person</MenuItem>
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
                                {doubleRooms.map((doubleroom)=>{
                                    return <FormControlLabel control={<Checkbox />} label={doubleroom} />
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
                            <Typography>Single Rooms</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                            <FormGroup>
                            <Typography sx={{marginBottom:'10px'}}>Our Sinle room is large and comfortable. It's spacious enough for one adult and comfortable. The room is thoughtfully furnished and equipped with all the essentials for a pleasant stay.</Typography>
                                {singleRooms.map((doubleroom)=>{
                                    return <FormControlLabel control={<Checkbox />} label={doubleroom} />
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
                                {deluxeRooms.map((doubleroom)=>{
                                    return <FormControlLabel control={<Checkbox />} label={doubleroom} />
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
                >
                    <FormControlLabel value="roomonly" control={<Radio />} label="Room Only" />
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
