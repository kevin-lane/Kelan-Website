import React, { useEffect, useState } from 'react';
import '../../App.css';
import Geolocation from '../../assets/svg/GeolocationIcon';
import BackgroundImage from '../../assets/images/stockholm.jpg';
import MailIcon from '../../assets/svg/MailIcon';
import Telephone from '../../assets/svg/TelephoneIcon';

import classes from './Home.module.css';

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
        <div id={classes.homePage}>
            <div id={classes.titleSection} className={classes.presentationContent}>
                <h1 id={classes.name}>KEVIN LANE</h1>
                <h3 id={classes.jobTitle} >JavaScript & Office365 Developer</h3>
            </div>

            <div id={classes.locationSection} className={classes.presentationContent}>
                <Geolocation /><h2>BASED IN STOCKHOLM</h2>
            </div>
            <a id="contact-btn" className={classes.contactMeBtn + ' ' + classes.presentationContent} href="#contact">{symbols}</a>
        </div>
    );
}