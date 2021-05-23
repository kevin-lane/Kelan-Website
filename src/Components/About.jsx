import React, { useEffect, useState } from 'react';
import '../App.css';
import AboutMe from './About/AboutMe';
import Career from './About/Career';
import Education from './About/Education';
import Skills from './About/Skills';
import BackgroundImage from '../assets/images/sunsetsrilanka.jpg';

export default function About(props){
    const [section, setSection] = useState(<AboutMe />);
    useEffect(() => {
        document.body.style.backgroundImage = `url(${BackgroundImage})`;
        document.body.style.backgroundAttachment = 'fixed';
    });

    return(
        <div>
            <ul className="about-nav-bar">
                <li>
                    <span onClick={() => setSection(<AboutMe />)}>ABOUT ME</span>
                </li>
                <li>
                    <span onClick={() => setSection(<Skills />)}>SKILLS</span>
                </li>
                <li>
                    <span onClick={() => setSection(<Career />)}>CAREER</span>
                </li>
                <li>
                    <span onClick={() => setSection(<Education />)}>EDUCATION</span>
                </li>
            </ul>
            {section}
        </div>
    );
}