const mongoose =require('mongoose');
const userschema=new mongoose.Schema({
    "username":{
        type:String,
        required:true
    },
    "email":{
        type:String,
        required:true
    },
    "password":{
        type:String,
        required:true
    },

    "bookings":[{
        type: mongoose.Schema.Types.ObjectId,
        // required: true,
        ref: "bookingsmodel"
    }]
})

module.exports=usersmodel=mongoose.model('usersmodel', userschema)