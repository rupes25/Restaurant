//  Custom error handler import kiya (jo tu pehle bana chuka hai)
import ErrorHandler from "../error/error.js";

//  Reservation model import kiya (jo ki Mongoose schema hoga)
import { reservation } from "../models/reservationSchema.js";

//  Ye controller function hai jo frontend se reservation data receive karega
export const sendReservation = async (req, res, next) => {

    //  req.body se frontend se aayi values destructure ki
    const { firstName, lastName, email, phone, date, time } = req.body;

    //  Agar koi bhi field empty hui to error throw karo
    if (!firstName || !lastName || !email || !phone || !date || !time) {
        //  ErrorHandler ko use karke ek 400 Bad Request error throw kiya
        return next(new ErrorHandler("Please enter the full details", 400));
    }

    //  Try block me reservation create karne ki koshish kar rahe hain
    try {
        await reservation.create({ firstName, lastName, email, phone, date, time });

        //  Agar sab sahi raha to 200 OK response bhejo client ko
        res.status(200).json({
            success: true,
            message: "Reservation has done successfully!",
        });
    }

    //  Agar koi error aata hai (jaise validation error) to catch block use hota hai
    catch (error) {
        //  Agar error ka type "ValidationError" hai to error messages collect karo
        if (error.name === "ValidationError") {
            //  Har ek error message ko extract karke ek array bana rahe hain
            const validationErrors = Object.values(error.errors).map((err) => err.message);

            // Sabhi error messages ko comma se join karke client ko bhej rahe hain
            return next(new ErrorHandler(validationErrors.join(","), 400));
        }
        return next(error);
    }
};
