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
        <div id="home-under-layer">
            <div>
                <div>
                    <h1 >KEVIN LANE</h1>
                    <h3>JavaScript and Office365 Developer</h3>
                    <p>Junior JavaScript Developer with focus on Office365 with passion for React and a hunger to learn more within the IT field</p>
                    <p>This website will act like my CV including my portfolio</p>
                </div>
                <h3><Geolocation /><br/>Based in Stockholm</h3>
                <a className="contact-me-btn" href="/contact">Contact me</a>
            </div>
        </div>
    );
}