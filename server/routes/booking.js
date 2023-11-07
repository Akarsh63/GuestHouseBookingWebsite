const express = require('express');
const router = express.Router();
const roommodel=require('../pages/roommodel');
const usersmodel = require('../pages/usersmodel');
const bookingsmodel=require('../pages/bookingmodel');
const middleware=require('../middleware');
var nodemailer = require('nodemailer');
const facultymodel=require('../pages/facultymodel');
const bookingmodel = require('../pages/bookingmodel');

router.get('/', (req, res) => res.send('/book/:userId--->all bookings and status'));
router.post('/bookss',async (req, res) => {
  console.log(req.body)
  const {  firstname,
    lastname,
    email,
    phone,
    address,
    roomnumber,
    roomstype,
    person,
    meals,
    fromdate,
    enddate,
    userId,
    //purpose: detail.purpose,
    specialrequest,
    userType} = req.body; 
  console.log(req.body)
  //return res.status(200).json({ "BookingSummary": 'hello' });
  let user;
   if (userType === 'faculty') {
    user = await facultymodel.findById(userId); 
  }
console.log(user);
  if (!user) {
    return res.status(400).send('User not found');
  }
  
  const rooms = await roommodel.find({_id: { $in: roomnumber._id } });
  const booking = new bookingsmodel({
    'userid': userId,
    "firstname": firstname,
    "lastname": lastname,
    "email": email,
    "phonenumber": phone,
    "adults": person,
    "address": address,
    "fromdate": fromdate,
    "enddate": enddate,
    "rooms":roomnumber,
    "roomstype": roomstype,
    "specialrequest": specialrequest,
    "meals": meals,
    "usertype":userType
  });

  try {
    const result = await booking.save();
    const bookings = await bookingsmodel.find({});
    console.log(bookings);
    // Update user's bookings
    user.bookings.push(result._id);
    await user.save();
    console.log(user);
    // Update rooms
    rooms.forEach( (room) => {
      room.booking.push(result._id);
       room.save();
    })

    return res.status(200).json({ "BookingSummary": result });
  } catch (err) {
    console.log(err);
    return res.status(400).json({ "message": err });
  }
});
router.post('/books', middleware, async (req, res) => {
  const { userType, details} = req.body; // Assuming you pass userType along with details

  let user;
   if (userType === 'user') {
    user = await usersmodel.findById(req.userId); // Replace userModel with your user model
  }

  if (!user) {
    return res.status(400).send('User not found');
  }

  const rooms = await roommodel.find({ _id: { $in: details.Rooms } });
  
  const booking = new bookingsmodel({
    'userid': user._id,
    "firstname": details.Firstname,
    "lastname": details.Lastname,
    "email": details.Email,
    "phonenumber": details.Phonenumber,
    "adults": details.Adults,
    "address": details.Address,
    "fromdate": details.Fromdate,
    "enddate": details.Enddate,
    "rooms": details.Rooms,
    "roomstype": details.Roomstype,
    "specialrequest": details.Specialrequest,
    "meals": details.Meals
  });

  try {
    const result = await booking.save();
    const bookings = await bookingsmodel.find({});
    // Update user's bookings
    user.bookings.push(result._id);
    await user.save();

    // Update rooms
    rooms.forEach(async (room) => {
      room.booking.push(result._id);
      await room.save();
    });

    return res.status(200).json({ "BookingSummary": result });
  } catch (err) {
    console.log(err);
    return res.status(400).json({ "message": err });
  }
});

router.get('/book',async (req,res)=>{
    // let exist=await usersmodel.findById(req.userid);
    // if(!exist){
    //   return res.status(400).send('User not found')
    // }
    // const user=await usersmodel.findById(req.userid)
    const bookings = await bookingsmodel.find({});

    const changeroomsbynumber = async (item) => {
      const roomNumbers = [];
      for (const roomId of item.rooms) {
        console.log(1)
        const room = await roommodel.findById(roomId);
        console.log(2)
        roomNumbers.push(parseInt(room.roomnumber));
      }
      roomNumbers.sort()
      item.rooms = roomNumbers;
    };
    // console.log("h");
    try {
      //console.log(bookings)
      await Promise.all(bookings.map(changeroomsbynumber));
      console.log(bookings)
      res.status(200).json({
        "Bookings": bookings
      });
    } catch (error) {
      res.status(500).json({ 'error': error });
    }
})
router.get('/:room',middleware,async(req,res)=>{
    let exist=await usersmodel.findById(req.userid);
    if(!exist){
      return res.status(400).send('User not found')
    }
    const booking=await bookingsmodel.findById(req.params.room);
    try{
        res.status(200).json({"bookingdetail":booking})
    }
    catch(err){
        res.status(400).json(err)
    }
})


router.post('/books',middleware,async (req,res)=>{
  let exist=await facultymodel.findById(req.userid);
    if(!exist){
      return res.status(400).send('faculy not found')
    }
  const {firstname,
    lastname,
    email,
    phone,
    address,
    roomnumber,
    roomstype,
    person,
    meals,
    fromdate,
    enddate,
   
    specialrequest}=req.body;
  const room= await roommodel.find({_id:{$in :roomnumber}})
  try{
  const booked= new bookingsmodel({"firstname":firstname,"lastname":lastname,"email":email,"phonenumber":phone,"fromdate":fromdate,"enddate":enddate,"adults":person,"address":address,"rooms":roomnumber,"roomstype":roomstype,"specialrequest":specialrequest,"meals":meals,"status":"Approved"});
  const result=await booked.save();
  const bookingtopush={
      _id:result._id
   }
  const pushbooking =async(item)=>{
      item.booking.push(bookingtopush)
      await item.save();
  }
  room.forEach(pushbooking)
  return res.status(200).json({message:"Booking created Successfully!"})
  }
  catch(err){
      return res.status(500).json(err);
  }
})



router.get('/book/:userId',async (req, res) => {
  const userId = req.params.userId;
  console.log(userId)


  try {
    // Find bookings in the database by user ID
    const bookings = await bookingsmodel.find({ _id: userId });
    //const booking = bookings.;

    return res.status(200).json({ Bookings: bookings});
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal server error' });
  }
});
module.exports=router;