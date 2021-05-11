import React, { useEffect } from 'react';
import '../App.css';
import Geolocation from '../assets/svg/GeolocationIcon';
import BackgroundImage from '../assets/images/stockholm.jpg';


export default function Home(){
    useEffect(() => {
        document.body.style.backgroundImage = `url(${BackgroundImage})`;
        document.body.style.backgroundAttachment = 'fixed';
    });

    return(
        <div>
            <div id="title-section" className="presentation-content">
                <h1 id="name" className="title-content">KEVIN LANE</h1>
                <h3 id="job-title" className="title-content">JavaScript & Office365 Developer</h3>
            </div>
            <div id="description-section" className="presentation-content">
                <p>Junior JavaScript Developer with focus on Office365 with passion for React and a hunger to learn more within the IT field</p>
            </div>
            <div id="location-section" className="presentation-content">
                <Geolocation /><h2>BASED IN STOCKHOLM</h2>
            </div>
            <a className="contact-me-btn" href="/contact">Contact me</a>
        </div>
    );
}