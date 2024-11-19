import express from 'express';
import axios from 'axios';


const router = express.Router();
router.use(express.urlencoded({extended:true})); // this allows parsing of data in the but maybe I can use express.json()


const apiKey = 'bc7707065fc4f117cd151ebec93b9afc';
const apiURL = 'https://api.openweathermap.org/data/2.5/weather';

router.post('/', async (req, res) =>{  // this is used for sending submission data from the location url
  const {zip, countryCode} = req.body; //the data that is available from zip and countyCode will be in the req.body, that goes for all posts
  
  try{

    /*when using an api in this manner a post request is created and sent to
    
    
    */ 
    const response = await axios.get(`${apiURL}?zip=${zip},${countryCode}&appid=${apiKey}`);

    res.json(response.data);
    console.log(res.json);

  } catch(error) {
    console.error('There seems to be an error fetching the weather data:' , error);
    res.status(500).json({message: 'There was an issue fetching the data'});
  }
});


export default router;
