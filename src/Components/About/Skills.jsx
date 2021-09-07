import React from 'react';
import '../../App';
import classes from './About.module.css';

export default function Skills(){
    return(
        <article className={classes.aboutMe}>
            <h1>Skills</h1>
            <p>HTML, CSS, JavaScript, jQuery, TypeScript, React, .NET, C#, SQL</p>
        </article>
    );
}