import React, { useEffect, useState } from 'react';
import '../App.css';
import {db} from '../firebase';
import BlogPost from './Blog/BlogPost';
import Image from '../assets/images/blog-mock-images/bench.jpg';
import ClockIcon from '../assets/svg/ClockIcon';
import TrashIcon from '../assets/svg/TrashIcon';
import PlusLgIcon from '../assets/svg/PlusLgIcon';

const user = window.localStorage.getItem("uname");
const pass = window.localStorage.getItem("pswrd");

export default function Blog(props){
    const [blogPost, showBlogPost] = useState(null);
    const [blogPosts, setBlogPosts] = useState([]);
    const [loggedIn, setLoggedIn] = useState(false);

    useEffect(() => {
        var blogPostsRef =  db.collection('blogposts');

        blogPostsRef.get().then(posts => {
            const newBlogPosts = [];
            posts.docs.forEach(post => {
                //Put in id for the document easily accessible
                blogPostsRef.doc(post.id).set({
                    id: post.id,
                    date: post.data().date,
                    entry: post.data().entry,
                    heading: post.data().heading,
                    introduction: post.data().introduction
                });
                newBlogPosts.push(post.data());

            })
            setBlogPosts(newBlogPosts);  
        })
        if (user === process.env.REACT_APP_ADMIN_USERNAME && pass === process.env.REACT_APP_ADMIN_PASSWORD) {
            setLoggedIn(true);
        }
    }, [])

    return(
        <div>  
            {loggedIn ? CreateBlogPost() : null}
                {blogPosts.map(post => {                  
                        switch (blogPost) {
                            case post.id:
                                console.log(post.id);
                                return( <BlogPost goBack={() => showBlogPost(null)} id={post.id} date={post.date} heading={post.heading} introduction={post.introduction} entry={post.entry} /> );   
                            case null: 
                                return(
                                    <div> 
                                         <ul className="blog-posts">
                                             <li id={post.id} className="blog-post-item" onClick={() => showBlogPost(post.id)}>
                                                <img src={Image}  alt="Girl in a jacket" width="400" height="200" />
                                                <h1 id="blog-post-heading">{post.heading}</h1>
                                                {loggedIn ? <button onClick={(e) => DeleteBlogPost(e, post.id)}><TrashIcon></TrashIcon> </button> : null}     
                                                <div className="time-stamp">
                                                     <p id="blog-post-publish-date"><ClockIcon /> <time dateTime={post.date}>{post.date}</time></p>
                                                </div>
                                             </li>
                                         </ul>
                                    </div>
                                );           
                            default: return null
                        }
                })}
        </div>
    )
}

function DeleteBlogPost(e, postID){
    e.stopPropagation();
    alert(`Item with id ${postID} has been deleted`);
    db.collection('blogposts').doc(postID).delete();
    window.location.reload();
}

function CreateBlogPost(){
        return(
            <div>
                <button className="create-blog-post-button" onClick={() => document.getElementById("blog-post-modal").style.display = 'block'}><PlusLgIcon></PlusLgIcon> Create Blog Post</button>
                <div id="blog-post-modal">
                    <span className="close-modal" onClick={() => document.getElementById("blog-post-modal").style.display = 'none'}>&times;</span>
                    <form action="">
                        <input className="blog-post-input" type="text" placeholder="Heading" id="blog-post-heading-field" required/><br/>
                        <input className="blog-post-input" type="text" placeholder="Introduction" name="introduction" id="blog-post-introduction-field" /><br/>
                        <textarea className="blog-post-input" name="entry" placeholder="Entry" id="blog-post-entry-field" required cols="30" rows="10"></textarea><br />
                        <button className="blog-post-submit-button" type="submit" onClick={SubmitBlogPost}>Submit post</button>
                    </form>
                </div>
            </div>
        );
}

function SubmitBlogPost(e){
    var heading = document.getElementById("blog-post-heading-field").value;
    var intro = document.getElementById("blog-post-introduction-field").value;
    var entry = document.getElementById("blog-post-entry-field").value;

    e.preventDefault();
    if(heading === "" || /^\s/.test(heading) || entry === "" || /^\s/.test(entry)){
        alert("Heading and entry are required. No empty white space allowed.");
    }
    else{
        db.collection('blogposts').add({
            id: '',
            date: `${timeStamp()}`,
            heading: heading,
            introduction: intro,
            entry: entry
        }).then((post) => {
            alert("Blog post added");
            document.getElementById("blog-post-modal").style.display = 'none';
            window.location.reload();
        });
    }
}

function timeStamp(yy, mm, dd, hour, minute){
    let today = new Date();

    //Adds a 0 to a number if number is less than 10, e.g 8 should be 08
    function addZero(num){
        return num < 10 ? `0${num}` : num;
    }
    //Date
    let yr = today.getFullYear();
    let mo = addZero(today.getMonth() + 1);
    let da = addZero(today.getDate());
    let date = `${yr}-${mo}-${da}`;
    //Time
    let hr = addZero(today.getHours());
    let min = addZero(today.getMinutes());
    let time = `${hr}:${min}`;

    return date + ' ' + time;
}