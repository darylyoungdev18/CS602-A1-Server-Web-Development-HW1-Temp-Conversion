import express from "express";
import http from "http";
import path from "path";
import locationRoutes from './modules/location.js';


const app = express();
app.use('/', locationRoutes); //take all the dynamic routes like /location/:zip/:countryCode
// the locationRoutes just means it is using the router url on the location.js which is /location

app.use(express.static('public')); // this is used for adding html files, css and js associated with the html page to same port



const Port = 5000;

app.listen(Port, () =>{
    console.log(`running on PORT ${Port}`);
})