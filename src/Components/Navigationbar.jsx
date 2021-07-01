import React from 'react';
import '../App.css';
import LoginModal from './Admin/Login';
import LinkedIn  from '../assets/svg/LinkedInIcon';
import GitHub from '../assets/svg/GitHubIcon';
import LogInIcon from '../assets/svg/LogInIcon';
import PersonaIcon from '../assets/svg/PersonaIcon';

export default function NavigationBar(){
    console.log(window.location.pathname);
    const loginStatus = () => {
        const user = window.localStorage.getItem("uname");
        const pass = window.localStorage.getItem("pswrd");
        if (user === process.env.REACT_APP_ADMIN_USERNAME && pass === process.env.REACT_APP_ADMIN_PASSWORD) {
            return <PersonaIcon />
        }
        else 
            return <LogInIcon />
    }
    return(
        <div>
            <div className="Navbar">
                <ul>
                    <a href="/portfolio">HOME</a>
                    <a href="#about">ABOUT</a>
                    <a href="#blog">BLOG</a>
                    <a href="#projects">PROJECTS</a>
                    <a href="#contact">CONTACT</a>
                    <button id="login-admin" className="svgNavs" onClick={() => document.getElementById("login-modal").style.display = 'block'}>{loginStatus()}</button>
                    <a className="svgNavs" href="https://www.linkedin.com/in/kevin-lane-884950a7/" target="_blank" rel="noreferrer"><LinkedIn></LinkedIn></a>
                    <a className="svgNavs" href="https://github.com/kevin-lane" target="_blank" rel="noreferrer"><GitHub></GitHub></a>
                </ul>
            </div>
            <div>
                <LoginModal />
            </div>
        </div>
    )
}