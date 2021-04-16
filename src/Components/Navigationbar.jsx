import React from 'react';
import '../App.css';
import  LinkedIn  from '../assets/svg/LinkedInIcon';

export default function NavigationBar(){
    console.log(window.location.pathname);
    return(
        <div className="Navbar">
            <ul>
                <a href="/">Home</a>
                <a href="about">About</a>
                <a href="contact">Contact</a>
                <a className="svgNavs" href="https://www.linkedin.com/in/kevin-lane-884950a7/" target="_blank" rel="noreferrer"><LinkedIn></LinkedIn></a>
            </ul>
            
        </div>
    )
}