//  Custom error class banayi ja rahi hai jo default Error class ko extend karegi
class ErrorHandler extends Error { 
    //  Jab bhi koi error throw hoga to message aur statusCode pass kiya jayega
    constructor(message, statusCode) {
        super(message); //  Super class (Error) ka constructor call kiya gaya
        this.statusCode = statusCode; //  Custom property set kari status code ke liye
    }
}

//  Ye ek middleware function hai jo har error ko handle karega Express app me
export const errorMiddleware = (err, req, res, next) => {

    //  Agar error me message nahi diya gaya to default message use hoga
    err.message = err.message || "Internal server error!";

    //  Agar error me status code nahi diya gaya to 500 (server error) default hoga
    err.statusCode = err.statusCode || 500;

    //  Response bhej diya client ko with status code and error message
    return res.status(err.statusCode).json({
        success: false,         //  success false set kiya kyunki ye error response hai
        message: err.message,   //  error ka message bheja ja raha hai
    });
};

//  ErrorHandler class ko export kar rahe hain taaki baaki files me use ho sake
export default ErrorHandler;
