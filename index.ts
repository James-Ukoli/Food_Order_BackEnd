import express from "express";
import { AdminRoute, VandorRoute } from "./routes";

 const app  = express();


 app.use('/admin', AdminRoute)
 app.use('/vandor', VandorRoute);

 app.use('/', (req, res) => {
    return res.json("Hello from Food Order Backend BABY DOUBLE BABY!!")
 })

 app.listen(8000, () => {
    // This is a Test Check 
    console.clear()
    console.log("App is listening to port 8000")
 })