import ErrorHandler from "../error/error.js";
import { Reservation } from '../models/rservationSchema.js'

export const sendReservation = async (req,res,next)=>{
    const{firstName, lastName, email, phone, time, date}= req.body;
    if(!firstName || !lastName || !email || !phone || !time|| !date){
        return next(new ErrorHandler("Please fill full form!",400));

    }
    try{
      await Reservation.create(firstName, lastName, email, phone, time, date);
      res.status(200).json({
        success:true,
        message:"Reservation sent successfully!",
      });
    }catch(error){
        if(error.name ==="validationError"){
            const validationError = Object.values(error.errors).map(
                (err)=> err.message
            );
            return next(new ErrorHandler(validationError.join(" ,"),400));
        }


    }

};