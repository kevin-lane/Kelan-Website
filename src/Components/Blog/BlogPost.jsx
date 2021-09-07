import { useEffect } from "react";
import classes from './Blog.module.css';

export default function BlogPost(props){
    useEffect(() => {
        window.scrollTo(0, 0);
    })
    return(
        <div id={props.id} className="blog-post">
            <span className={classes.returnBackBtn} onClick={props.goBack}>Back</span>
            <div><h1>{props.heading}</h1></div>
            <div className={classes.postImage}><img src={props.image} alt="imaginem" width="800" height="400" /></div>
            <div><p>{props.date}</p></div>
            
            <div>
                <h3>
                    {props.introduction}
                </h3>
            </div>
            <div>
                <p>
                    {props.entry}
                </p>
            </div>
        </div>
    );
}