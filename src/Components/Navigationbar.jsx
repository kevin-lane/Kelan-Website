import React from 'react';
import '../App.css';

export default function NavigationBar(){
    console.log(window.location.pathname);
    return(
        <div className="Navbar">
            <ul>
                <a href="/">Home</a>
                <a href="about">About</a>
                <a href="contact">Contact</a>
            </ul>
        </div>
    )
}