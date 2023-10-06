import React,{useEffect,useState} from 'react';
import axios from 'axios';
import Table from '../components/Table';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import { Box } from '@mui/material';
import { Grid } from '@mui/material';
import { Button } from '@mui/material';



const AdminallBookings=(() =>{ 
    const navigate = useNavigate();
    const [cookies] = useCookies(['admin_access_token']);
    useEffect(()=>{if(!cookies.admin_access_token){navigate('/adminlogin')}})
    const [booking,setbooking]=useState([]);
    const [refresh,setrefresh]=useState(false);
    const [change, setChange] = useState(false);
    console.log(change)
     useEffect(()=>{
        console.log(2)
        const getting=async()=>{
           
              try{
                const response= await axios.get(`http://localhost:8082/admibookings/bookings`, {
                    headers: {
                      'x-token': cookies.admin_access_token
                    }
                  })
                setbooking(response.data.Bookings);
              }
            catch(error) {
                console.log(error);
            }}
        getting();
    },[refresh]);

    console.log(window.location.href)
    return (
      <Box sx={{marginTop: '65px', marginLeft: '200px'}}>
        <Grid container sx={{display: 'flex', flexDirection: 'row', position: 'fixed', zIndex: '999', gap:'20px', m: '5px 50px'}} >
          <Button variant='contained' onClick={(e) => setChange(false)}>Students</Button>
          <Button variant='contained' onClick={(e) => setChange(true)}>Faculty</Button>
        </Grid>
        {
          change ? (
            <Table booking={booking} setrefresh={setrefresh} />
          ) : (
            <Table booking={booking} setrefresh={setrefresh} />
          )
        }
      </Box>
    );
});
    
export default AdminallBookings;