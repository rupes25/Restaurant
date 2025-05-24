import mongoose from "mongoose";
import validator from "validator";

const reservationSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required: true,
        minLength:[2,"First name must contain atleast 2 characters!"], // agar 2 length  ka ho to second wala option show krega
        maxLength:[12,"First name cannot exceeds 12 characters!"],
    },
    lastName:{
        type:String,
        required: false,
        minLength:[2,"Last name must contain atleast 2 characters!"],
        maxLength:[12,"Last name cannot exceeds 12 characters!"],
    },
    email:{
        type:String,
        required:true,
        ValidityState:[validator.isEmail,"Provide a valid email"],
    },
    phone:{
        type:Number,
        required:true,
        minLength:[7,"Invalid Phone Number!"],
        maxLength:[10,"Invalid Phone Number!"],
    },
    time:{
        type:String,
        required:true,
    },
    date:{
        type:String,
        required:true,
    },

});

export const reservation = mongoose.model("Reservation",reservationSchema);