import React from "react";
import NavBar from "./NavBar";
import './home.css';
import Categories from "../categories";
import Discount from "./Discount";
import Location from "./Location";
import Slidebarcom from "./Slidebarcom";





function Home({locationFromApp}) {
    return (
        <div className="homealldesign">
            <div className="navbarimage">
                <NavBar locationFromHome ={locationFromApp} />
            </div>
            <div>
                <Categories /></div>
            <div>
            <Slidebarcom/>
                <Discount /></div>

            <div>
                <Location />
                
            </div>
        </div>



    );

}
export default Home;