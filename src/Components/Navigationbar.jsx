import React, { useState } from 'react';
import '../App.css';
import LoginModal from './Admin/Login';
import LinkedIn  from '../assets/svg/LinkedInIcon';
import GitHub from '../assets/svg/GitHubIcon';
import LogInIcon from '../assets/svg/LogInIcon';
import PersonaIcon from '../assets/svg/PersonaIcon';

export default function NavigationBar(){
    console.log(window.location.pathname);
    const [mainMenuMobileOpen, toggleMainMenuMobileOpen] = useState(false);

    const loginStatus = () => {
        const user = window.localStorage.getItem("uname");
        const pass = window.localStorage.getItem("pswrd");
        if (user === process.env.REACT_APP_ADMIN_USERNAME && pass === process.env.REACT_APP_ADMIN_PASSWORD) {
            return <PersonaIcon />
        }
        else return <LogInIcon />
    }

    const links = () => {
        return(
            <ul id="Navbar-links" className="Navbar-links">
                <a href="/portfolio">HOME</a>
                <a href="#about">ABOUT</a>
                <a href="#blog">BLOG</a>
                <a href="#projects">PROJECTS</a>
                <a href="#contact">CONTACT</a>
                <a className="svgNavs" href={() => console.log("Admin panel opened")} onClick={() => document.getElementById("login-modal").style.display = 'block'}>{loginStatus()}</a>
                <a className="svgNavs" href="https://www.linkedin.com/in/kevin-lane-884950a7/" target="_blank" rel="noreferrer"><LinkedIn></LinkedIn></a>
                <a className="svgNavs" href="https://github.com/kevin-lane" target="_blank" rel="noreferrer"><GitHub></GitHub></a> 
            </ul>
        )
    }

    const mainMenuButton = () => {
        return(
            <div onClick={openMainMenu} id="menu-button" className="menu-button">
                <div className="menu-button-layer"></div>
                <div className="menu-button-layer"></div>
                <div className="menu-button-layer"></div>
            </div>
        )
    }

    const openMainMenu = () => {
        toggleMainMenuMobileOpen(true);
        document.getElementsByClassName('Navbar')[0].style.height = "500px";
        
    }

    const closeMainMenu = () => {
        toggleMainMenuMobileOpen(false);
        document.getElementsByClassName('Navbar')[0].style.height = "55px";

    }

    //Set to normal version of Navbar when resized
    window.addEventListener('resize', function(){
        if (window.innerWidth > 700) {
            closeMainMenu();
        }
    })

    return(
        <div>
            <div className="Navbar">
                {links()}  
                {mainMenuMobileOpen ? <span className="close-modal" onClick={closeMainMenu}>&times;</span> : mainMenuButton()}
            </div>
            <div>
                <LoginModal />
            </div>
        </div>
    )

}

