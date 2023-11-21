const mongoose=require('mongoose');
const facultySchema=new mongoose.Schema({
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
module.exports=facultymodel=mongoose.model("facultymodel",facultySchema);