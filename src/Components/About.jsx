import React from 'react';
import '../App.css';

export default function About(){
    return(
        <div>
            <article className="aboutMe">
                <h1>About me</h1>
                <p>I am a certified SharePoint Developer with focus and passion on Frontend-development.</p>
                <p>My ambition is to succeed within the IT-field with the goal to make our digital world more user-friendly for anybody.</p>
                <p>During my freetime, I enjoy being out in the nature and capturing beautiful photos.</p>
            </article>
            <article className="aboutMe">
                <h1>Competence</h1>
                <p>HTML, CSS, JavaScript, jQuery, TypeScript, React, .NET, C#, SQL</p>
            </article>
            <article className="experienceSection">
                <h1>Career</h1>
                <h3> Office365/SharePoint Developer - Enfo  (Oct. 2019 - Feb. 2020) </h3>
                <p>At Enfo I worked in the Modern Workplace Team mainly 
                    developing applications for SharePoint with SharePoint Framework using mainly JavaScript, TypeScript and React. 
                    While working here I also learnt about Microsoft Power Platform where I even got a chance to make a configuration in MS Flow for one of Enfos clients.
                    Since we worked with an agile approach with Scrum using Azure DevOps and Daily meetings I have found an interest in this approach. I also got to learn 
                    the basics of Azure.</p>
                <h3> SharePoint Developer Trainee(LIA) - Altran  (March 2019 - May 2019) </h3>
                <p>During my internship at Altran, I was involved in building a Process Management web part in SharePoint Framework (SPFx) in where the user can document their processes when for example working in a project.
                The webpart was built with TypeScript and React as a framework.</p>
            </article>
            <article className="experienceSection">
                <h1>Education</h1>
                <h3>SharePoint Developer - Higher Vocational Education/Yrkeshögskoleexamen - EC Utbildning (2017 - 2019)</h3>
                <p>This programs aim is to make you a certified SharePoint Developer. Courses included in this program are mainly about administration and building applications in SharePoint.
                    Frontend and Backend development are also included here.
                </p>
                <h3>B.SC in Computer Engineering - Royal Institute of Technology(KTH) (2012 - 2017 NON-COMPLETION)</h3>
                <p>This program includes a huge range of fundamental knowledge and skills within the ICT area such as Computer Engineering, mathematics, electronics, programming and networking.
                    Computer Engineering program also allows you to customise your education depending on individual interests.
                </p>
            </article>
        </div>
    );
}