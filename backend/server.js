import app from "./app.js";

app.listen(process.env.PORT,()=>{
    console.log(`Server is listening on port no ${process.env.PORT}`)
});