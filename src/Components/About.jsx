import React, { useEffect } from 'react';
import '../App.css';
import AboutMe from './About/AboutMe';
import AboutMeNavigationBar from './About/AboutMeNav';
import Career from './About/Career';
import Education from './About/Education';
import Skills from './About/Skills';
import BackgroundImage from '../assets/images/sunsetsrilanka.jpg';

export default function About(){
    useEffect(() => {
        console.log("About Page working");
        document.body.style.backgroundImage = `url(${BackgroundImage})`;
    });

    return(
        <div>
            <div>
                <AboutMeNavigationBar />
                {selectSection()}
            </div>
        </div>
    );
}

function selectSection(){
    var hash = window.location.hash;
    switch (hash) {
        case '#skills':
            return <Skills />
        case '#career':
            return <Career />
        case '#education':
            return <Education />
        default:
            return <AboutMe />    
    }
}