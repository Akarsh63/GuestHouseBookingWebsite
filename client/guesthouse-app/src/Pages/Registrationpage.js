import React,{useEffect, useState}  from 'react'
import { useNavigate } from 'react-router-dom';
import {Link} from 'react-router-dom';
import axios from "axios";
import './registration.css'
import signUpImage from '../images/singUp-image.jpg';
import { FaUser,FaLock } from "react-icons/fa";
import { MdMail } from "react-icons/md";
import { MuiOtpInput } from 'mui-one-time-password-input'
import { Typography } from 'antd';
import {  Button, Grid } from '@mui/material';
export default function Registrationpage() {
  const [page,setpage]=useState(0);
  const [otp, setOtp] =useState('');
  const [resendDisabled, setResendDisabled] = useState(true);
  const [timer, setTimer] = useState(60);
  useEffect(() => {
    if (timer > 0) {
      const countdown = setTimeout(() => {
        setTimer(timer - 1);
      }, 1000);
      return () => clearTimeout(countdown);
    } else {
      setResendDisabled(false);
    }
  }, [timer]);
  function matchIsNumeric(text) {
    const isNumber = typeof text === 'number';
    const isString = typeof text === 'string';
    return (isNumber || (isString && text !== '')) && !isNaN(Number(text));
  }  
  const validateChar = (value, index) => {
    return matchIsNumeric(value);
  };
  
   const [Registrationinfo,setRegistraioninfo]=useState({
     username:'',
     email:'',
     password:'',
     confirmpassword:''
   })
  const handleotpChange = (newValue) => {
    setOtp(newValue)
  }
   const navigate = useNavigate();
   const handlechange = (event) => {
    const { name, value } = event.target;
    setRegistraioninfo({ ...Registrationinfo, [name]: value });
  };
  const backControl= async (event) => {
    event.preventDefault();
    try{
      const {username,email}=Registrationinfo;
      const user = await axios.put('http://localhost:8082/users/clearotp',{username,email});
      console.log(user.data.Info)
    }
    catch(err){
        alert(err.response.data.message)
    }
    setTimer(60)
    setResendDisabled(true)
    setOtp('')
    setpage(0)
  };
  const resendControl = async (event) => {
    event.preventDefault();
    try {
      const { username, email } = Registrationinfo;
      const user = await axios.post('http://localhost:8082/users/resendotp', { username, email });
      console.log(user.data.Info);
      setTimer(60);
      setResendDisabled(true);
    } catch (err) {
      alert(err.response.data.message);
    }
    setOtp('')
  };
  
  const  onsubmit= async (event)=>{
    event.preventDefault();
    try{
      const {username,email,password,confirmpassword}=Registrationinfo;
      const user = await axios.post('http://localhost:8082/users/register',{username,email,password,confirmpassword});
      console.log(user)
      setpage(1);
      setTimer(60);
      setResendDisabled(true);
    }
    catch(err){
        alert(err.response.data.message)
    }
  }
  const handleComplete=async (event)=>{
    event.preventDefault();
    try{
      const {username,email,password}=Registrationinfo;
      const user = await axios.post('http://localhost:8082/users/verifyotp',{username,email,password,otp});
      console.log(user.data.Info)
      alert('User Created Successfully!')
      navigate('/')
    }
    catch(err){
        alert(err.response.data.message)
    }
    setOtp('')
  }
  const reggetform=()=>{
    if(page===0){
      return <div>
<form class="register-form" id="register-form" onSubmit={onsubmit}>
                            <div class="form-group">
                                <label for="username" className='lbl'><FaUser class="material-icons-name"/></label>
                                <input value={Registrationinfo.username} onChange={handlechange} type='text' placeholder='Username' name='username' id='username' class="input_res" required/>
                            </div>
                            <div class="form-group">
                                <label for="email" className='lbl'><MdMail class="zmdi zmdi-email"/></label>
                                <input  value={Registrationinfo.email} onChange={handlechange} type='text' placeholder='IITJ Email ID' name='email' id='email' class="input_res" required/>
                            </div>
                            <div class="form-group">
                                <label for="pass" className='lbl'><FaLock class="material-icons-name"/></label>
                                <input value={Registrationinfo.password} onChange={handlechange} type='password' placeholder='Password' name='password' id='pass' class="input_res" required/>
                            </div>
                            <div class="form-group">
                                <label for="cpass" className='lbl'><FaLock class="material-icons-name"/></label>
                                <input value={Registrationinfo.confirmpassword} onChange={handlechange} type='password' placeholder='Confirm Password' name='confirmpassword' id='cpass' class="input_res" required/>
                            </div>
                            <div class="form-group form-button">
                                <input type="submit" name="signup" id="signup" class="form-submit reg" value="Register"/>
                            </div>
                        </form>
      </div>
    }
    else{
      return       <div><Typography variant="body1" style={{ marginBottom: '10px' }}>
      Enter OTP sent to <span style={{ fontWeight: 'bold',color:'#F31559' }}>{Registrationinfo.email}</span>
    </Typography>
    <MuiOtpInput
      length={6}
      value={otp}
      onChange={handleotpChange}
      autoFocus
      validateChar={validateChar}
      TextFieldsProps={{
        placeholder: '-',
        style: { borderBottom: 'none' }, 
      }}
      
    />
    <div style={{width:'100%',textAlign:'center',marginTop:'25px'}}>
    <Button variant="contained" sx={{ backgroundColor: '#F31559','&:hover': {
            backgroundColor: 'rgba(243, 21, 89, 0.9)',
          }, }} onClick={handleComplete}>Validate</Button>
    </div>
    <div style={{width:'80%',textAlign:'center',marginTop:'5px',marginLeft:'auto',marginRight:'auto'}}>
    <Link href="#" underline="none" style={{ color: '#B7B7B7', marginTop: '4px', display: 'block',textDecoration:'none' }}>
        Resend the verification code in {timer}
      </Link>
    </div>
    <Grid container sx={{display:'flex',flexDirection:'row',justifyContent:'space-between',marginTop:'25px'}}>
      <Grid item>
        <Button variant="outlined" sx={{color:'#F31559',borderColor:'#F31559','&:hover': {
            borderColor: 'rgba(243, 21, 89, 0.9)',
          }} } onClick={backControl}>Go Back</Button>
      </Grid>
      <Grid item>
      <Button
  disabled={resendDisabled}
  sx={{
    color: '#F31559',
    border: '1px solid #F31559', 
    '&:hover': {
      borderColor: 'rgba(243, 21, 89, 0.9)',
    },
  }}
  onClick={resendControl}
>
  Resend otp
</Button>

      </Grid>
    </Grid>
    </div>
    
      
    }
  }
  return (
    <div className='main'>
      <section class="signup">
            <div class="container">
                <div class="signup-content">
                    <div class="signup-form">
                        <h2 class="form-title">Register</h2>
                      {reggetform()}
                    </div>
                    <div class="signup-image">
                        <figure><img src={signUpImage} alt="sing up image" /></figure>
                        <Link to='/' class="signup-image-link">I am already a member</Link>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}
