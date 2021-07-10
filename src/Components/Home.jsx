import React, { useEffect, useState } from 'react';
import '../App.css';
import Geolocation from '../assets/svg/GeolocationIcon';
import BackgroundImage from '../assets/images/stockholm.jpg';
import MailIcon from '../assets/svg/MailIcon';
import Telephone from '../assets/svg/TelephoneIcon';

export default function Home(){
    const [symbols, setSymbols] = useState([<MailIcon />, <Telephone />]);
    
    useEffect(() => {
        document.body.style.backgroundImage = `url(${BackgroundImage})`;
        document.body.style.backgroundAttachment = 'fixed';
        //Shuffle between telephone and mail icon in Contact button
        var index = 0;
        setInterval(() => {
            index = (index + 1)%(symbols.length);
            setSymbols(symbols[index]);
        }, 2000);
    }, []);

    return(
        <div id="home-page">
            <div id="title-section" className="presentation-content">
                <h1 id="name" className="title-content">KEVIN LANE</h1>
                <h3 id="job-title" className="title-content">JavaScript & Office365 Developer</h3>
            </div>

            <div id="location-section" className="presentation-content">
                <Geolocation /><h2>BASED IN STOCKHOLM</h2>
            </div>
            <a id="contact-btn" className="contact-me-btn presentation-content" href="#contact">{symbols}</a>
        </div>
    );


}