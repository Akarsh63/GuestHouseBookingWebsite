import React, { useEffect, useState } from 'react';
import { Box, Grid, Typography } from '@mui/material'
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment)

function Calender() {

    const [events, setevents] = useState([]);

    useEffect(() => {
        const Getdata = async() => {
            
        }
        Getdata();
    })

  return (
    <Box id='Gallery' sx={{width: '100%', zIndex: '0', paddingTop: '70px'}}>
        <Grid container sx={{width: '90%', margin: 'auto', padding: 0}} >
            <Typography sx={{fontSize: '40px'}} className='gallery' >Calender</Typography>
            <Grid container sx={{position: 'relative', zIndex: '0'}} >
            <Calendar
                localizer={localizer}
                // events={events}
                startAccessor="start"
                endAccessor="end"
                titleAccessor="title"
                style={{ margin: '10px', height: 500, width: '100%' }}
            />
            </Grid>
        </Grid>
    </Box>
  )
}

export default Calender