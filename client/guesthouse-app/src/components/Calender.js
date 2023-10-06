import React, { useEffect, useState } from 'react';
import { Box, Grid, Typography } from '@mui/material'
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import axios from 'axios';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import Rooms from '../images/rooms.jpg';

const localizer = momentLocalizer(moment)



function Calender() {
    const navigate = useNavigate();
    const [cookies] = useCookies(['access_token']);
    const [freeRooms, setFreeRooms] = useState([]);


    useEffect(()=>{if(!cookies.access_token){navigate('/')}})

    useEffect(() => {
        const startDate = moment().startOf('day');
        const endDate = moment().add(1, 'year').endOf('day');

        const fetchData = async() => {

          try {
            const allrooms = await axios.get("http://localhost:8082/rooms/allrooms", {
              headers: {
                'x-token': cookies.access_token
              }
            });
            console.log(allrooms)
            
            const newdeluxerooms = allrooms.data.alldeluxerooms;
            const newsinglerooms = allrooms.data.allsinglerooms;
            const newdoublerooms = allrooms.data.alldoublerooms;

            const events = [];
            for (let date = moment(startDate); date.isBefore(endDate); date.add(1, 'day')) {

                const dlt = newdeluxerooms.length;
                const ddlt = newsinglerooms.length;
                const slt = newdoublerooms.length;

                const deluxeRooms = {
                    start: date.startOf('day').toDate(),
                    end: date.endOf('day').toDate(),
                    title: `Deluxe Room - ${dlt}`,
                    type: 'deluxe',
                    count: dlt,
                };

                const doubleRooms = {
                    start: date.startOf('day').toDate(),
                    end: date.endOf('day').toDate(),
                    title: `Double Room - ${ddlt}`,
                    type: 'double',
                    count: ddlt,
                };

                const singleRooms = {
                    start: date.startOf('day').toDate(),
                    end: date.endOf('day').toDate(),
                    title: `Single Room - ${slt}`,
                    type: 'single',
                    count: slt,
                };

                events.push(deluxeRooms, doubleRooms, singleRooms);
            }

            setFreeRooms(events);
            
          } catch (err) {
            alert(err);
          }
        };
        fetchData();
    }, []);

    console.log(freeRooms)

  return (
    <Box id='calender' sx={{width: '100%', zIndex: '0', paddingTop: '70px'}}>
        <Grid container sx={{width: '90%', margin: 'auto', padding: 0}} >
            <Typography sx={{fontSize: '40px'}} className='gallery' >Calender</Typography>
            <Grid container sx={{position: 'relative', zIndex: '0'}} >
            <Calendar
                localizer={localizer}
                events={freeRooms}
                startAccessor="start"
                endAccessor="end"
                titleAccessor="title"
                style={{ margin: '10px', height: 500, width: '100%' }}
                eventPropGetter={(event) => {
                    if (event.type === 'deluxe') {
                      return { style: { backgroundColor: 'green' } };
                    } else if (event.type === 'double') {
                      return { style: { backgroundColor: 'blue' } };
                    } else if (event.type === 'single') {
                      return { style: { backgroundColor: 'red' } };
                    }
                    return {};
                }}
            />
            </Grid>
        </Grid>
    </Box>
  )
}

export default Calender