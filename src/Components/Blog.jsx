import React, { useEffect, useState } from 'react';
import '../App.css';
import {db} from '../firebase';
import BlogPost from './Blog/BlogPost';
import Image from '../assets/images/blog-mock-images/bench.jpg';
import ClockIcon from '../assets/svg/ClockIcon';
import TrashIcon from '../assets/svg/TrashIcon';

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
            console.log(posts.docs.length);
            posts.docs.forEach(post => {
                console.log(post.id);
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
            console.log(blogPosts);
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
}

function CreateBlogPost(){
        return(
            <div>
                <button onClick={() => document.getElementById("blog-post-modal").style.display = 'block'}>+Create Blog Post</button>
                <div id="blog-post-modal">
                    <span className="close-modal" onClick={() => document.getElementById("blog-post-modal").style.display = 'none'}>&times;</span>
                    <form action="">
                        <label htmlFor="">Heading</label>
                        <input type="text" id="blog-post-heading-field"/><br/>
                        <label htmlFor="">Introduction</label>
                        <input type="text" name="introduction" id="blog-post-introduction-field" /><br/>
                        <label htmlFor="">Entry</label>
                        <textarea name="entry" id="blog-post-entry-field" cols="30" rows="10"></textarea><br />
                        <button type="submit" onClick={SubmitBlogPost}>Submit post</button>
                    </form>
                </div>
            </div>
        );
}

function SubmitBlogPost(e){
    e.preventDefault();
    db.collection('blogposts').add({
        id: '',
        date: `${timeStamp()}`,
        heading: document.getElementById("blog-post-heading-field").value,
        introduction: document.getElementById("blog-post-introduction-field").value,
        entry: document.getElementById("blog-post-entry-field").value
    }).then((post) => {
        alert("Blog post added");
    });
}

function timeStamp(yy, mm, dd, hour, minute){
    let today = new Date();

    //Adds a 0 to a number if number is less than 10, e.g 8 should be 08
    function addZero(num){
        return num < 10 ? `0${num}` : num;
    }

    let yr = today.getFullYear();
    let mo = addZero(today.getMonth() + 1);
    let da = addZero(today.getDate());
    let date = `${yr}-${mo}-${da}`;
    console.log(`Todays date is ${date}`);

    let hr = addZero(today.getHours());
    let min = addZero(today.getMinutes());
    let time = `${hr}:${min}`;
    console.log(`Current time is: ${time}`);

    return date + ' ' + time;
}