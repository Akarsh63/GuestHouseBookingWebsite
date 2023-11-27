const express = require('express');
const router = express.Router();
const roommodel=require('../pages/roommodel');
const usersmodel = require('../pages/usersmodel');
const bookingsmodel=require('../pages/bookingmodel');
const middleware=require('../middleware');
var nodemailer = require('nodemailer');

router.get('/', (req, res) => res.send('/book/:userId--->all bookings and status'));
router.post('/book',middleware,async (req,res)=>{
  let exist=await usersmodel.findById(req.userid);
    if(!exist){
      return res.status(400).send('User not found')
    }
    const {details}=req.body;
    const rooms= await roommodel.find({_id:{$in :details.Rooms}})
    const user=await usersmodel.findById(req.userid)
    const booking=new bookingsmodel({
        'userid':user._id,
        "firstname":details.Firstname,
        "lastname":details.Lastname,
        "email":details.Email,
        "phonenumber":details.Phonenumber,
        "adults":details.Adults,
        "address":details.Address,
        "fromdate":details.Fromdate,
        "enddate":details.Enddate,
        "rooms":details.Rooms,
        "roomstype":details.Roomstype,
        "specialrequest":details.Specialrequest,
        "meals":details.Meals
    })
    const result=await booking.save()
    // console.log(result)
    const bookingtopush={
       _id:result._id
    }
    // console.log(bookingtopush)
    try{
        user.bookings.push(bookingtopush);
        await user.save()
        // console.log(rooms)
        
        const pushbooking =async(item,index)=>{
            item.booking.push(bookingtopush)
            await item.save();
        }
        rooms.forEach(pushbooking)
        return res.status(200).json({"BookingSummary":result})
    }
    catch(err){
        console.log(err)
        return res.status(400).json({"message":err})
    }
})

router.get('/book',async(req,res)=>{
  console.log('Incoming request:', req.method, req.url, req.body);
    let exist=await usersmodel.findById(req.userid);
    if(!exist){
      return res.status(400).send('User not found')
    }
    const user=await usersmodel.findById(req.userid)
    const bookings = await bookingsmodel.find({ _id: { $in: user.bookings } });

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
  const room= await roommodel.find({_id:{$in :rooms}})
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