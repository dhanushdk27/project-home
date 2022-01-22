import logo from './logo.svg';
import './App.css';
import Home from './homedesigncomp/home';
import { useEffect, useState } from 'react';
import axios from 'axios';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Details from './details/Details';

function App() {
  const [locationfind, setlocationfind] = useState([]);
  const [LocationObject, setLocationObject] = useState({})
  const getmapdata = async() =>{
      let getdata = await axios.get("https://rcz-backend-arvinth.herokuapp.com/api/mapData",{
     params:{
       latitude : locationfind[0],
       longitude : locationfind[1]
     }
       
      });
      setLocationObject(await getdata.data);

  }
  useEffect(()=>{

if(locationfind.length>0){ getmapdata();}

  },[locationfind])

    function getLocation() {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(showPosition);
        } else {
          console.log("Geolocation is not supported by this browser.");
        }
      }
    function showPosition(position){
      setlocationfind( [position.coords.latitude , position.coords.longitude]);
    }
    useEffect(()=>{
        getLocation();
    },[])
return (
  <Router>
    <div className='app1'>
    <Switch>
          <Route path="/home" exact>
          <Home locationFromApp = {LocationObject}/>
          </Route>

          <Route path="/details/:id" exact>
          <Details/>
          </Route>
        </Switch>
        {locationfind}
    
    </div>
    </Router>
  );
}

export default App;
