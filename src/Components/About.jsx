import React from 'react';
import '../App.css';
import AboutMe from './About/AboutMe';
import AboutMeNavigationBar from './About/AboutMeNav';
import Career from './About/Career';
import Education from './About/Education';
import Skills from './About/Skills';

export default function About(){
    return(
        <div>
            <AboutMeNavigationBar />
            {selectSection()}
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