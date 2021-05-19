import React, { useEffect, useState } from 'react';
import '../../App';

export default function AboutNav(props){
    const [hash, setHash] = useState(window.location.hash);
    useEffect(() => {
        const hashHandler = () => {
            setHash((prevHash) => {
                const newHash = window.location.hash;
                if (prevHash !== newHash) {
                    //reload page without reloading browser
                    window.location.reload();
                    return newHash;
                }
                return hash;
            });
        };
        window.addEventListener('hashchange', hashHandler);
    });
    return <Sections />
}

export function Sections(props){
    return(
            <ul className="about-nav-bar">
                <Section text="ABOUT ME" href="#aboutme"></Section>
                <Section text="SKILLS" href="#skills"></Section>
                <Section text="CAREER" href="#career"></Section>
                <Section text="EDUCATION" href="#education"></Section>
            </ul>
    );
}

export function Section(props){
    return(
        <li>
            <a href={props.href}>{props.text}</a>
        </li>
    );
}