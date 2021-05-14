import React, { useState } from 'react';
import '../App.css';
import BlogPost from './Blog/BlogPost';

//Mock data
let posts = [
    { id: 1, date: "2020-12-12", heading: "Lorem Ipsum Color blablabla", introduction:"consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ullamcorper dignissim cras tincidunt lobortis. Amet porttitor eget dolor morbi.", entry:"Dvfdvfdvfdvdvfv cde dignissim enim sit."},
    { id: 2, date: "2020-10-13", heading: "Lorem Ipsum Color lalalalalal", introduction:"consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.", entry:"Dweretyetteytrque dignissim enim sit."},
    { id: 3, date: "2021-04-12", heading: "Lorem Ipsum Color bobobobobbobo", introduction:"sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ullamcorper dignissim crolor morbi.", entry:"Dvdfvfdvdvdbbvgvdfgvfdgdrgrdfdvfrdvfdm enim sit."}
];

export default function Blog(props){
    const [hash, setHash] = useState(window.location.hash);
    //Handle events when URL hash changes and reload page without manually refresh page
    const hashHandler = () => {
        setHash((prevHash) => {
            const newHash = window.location.hash;
            if(prevHash !== newHash){
                return newHash;
            }
            return prevHash;
        });
    };
    window.addEventListener('hashchange', hashHandler);

    return(
        <div>
            {posts.map(post => {    
                switch (window.location.hash) {
                    case `#${post.id}`:
                        return( <BlogPost id={post.id} date={post.date} heading={post.heading} introduction={post.introduction} entry={post.entry} /> );                    
                    case '':                             
                        return(
                            <ul className="blog-posts">
                                <a className="blog-post-item" id={post.id} href={`#${post.id}`}>
                                     <BlogPost id={post.id} date={post.date} heading={post.heading} entry={post.entry} />
                                </a>
                            </ul>
                        );                       
                }
            })} 
        </div>
    )
}