import React, { useEffect, useState } from 'react';
import '../../App.css';
import AboutMe from './AboutMe';
import Career from './Career';
import Education from './Education';
import Skills from './Skills';
import BackgroundImage from '../../assets/images/sunsetsrilanka.jpg';

import classes from './About.module.css';

export default function About(props){
    const [section, setSection] = useState(<AboutMe />);
    useEffect(() => {
        document.body.style.backgroundImage = `url(${BackgroundImage})`;
        document.body.style.backgroundAttachment = 'fixed';
    });

    return(
        <div>
            <ul className={classes.aboutNavBar}>
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