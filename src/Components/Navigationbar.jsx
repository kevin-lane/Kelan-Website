import React from 'react';
import '../App.css';
import LinkedIn  from '../assets/svg/LinkedInIcon';
import GitHub from '../assets/svg/GitHubIcon';

export default function NavigationBar(){
    console.log(window.location.pathname);
    return(
        <div className="Navbar">
            <ul>
                <a href="/">HOME</a>
                <a href="about">ABOUT</a>
                <a href="contact">CONTACT</a>
                <a className="svgNavs" href="https://www.linkedin.com/in/kevin-lane-884950a7/" target="_blank" rel="noreferrer"><LinkedIn></LinkedIn></a>
                <a className="svgNavs" href="https://github.com/kevin-lane" target="_blank" rel="noreferrer"><GitHub></GitHub></a>
            </ul>
        </div>
    )
}