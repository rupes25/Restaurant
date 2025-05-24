import mongoose from "mongoose";

const dbConnection = ()=>{
    mongoose
    .connect(process.env.MONGO_URI,{  // yaha mongoose ko db se connect kr rhe hai
        dbName: "Restaurant"
    }).then(()=>{ // yaani  connect ho gaya to
        console.log("Database Connected Successfully");
    })
    .catch(()=>{ //aur agar n hua to.
        console.log(`Error in connection ${err}`);
    })

};

export default dbConnection;