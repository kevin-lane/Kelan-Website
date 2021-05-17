export default function BlogPost(props){
    return(
        <div id={props.id} className="blog-post">
            <div className="blog-post-heading"><h1>{props.heading}</h1></div>
            <div className="post-image"><img src={props.image} alt="Girl in a jacket" width="800" height="400" /></div>
            <div className="blog-post-stamp"><p>{props.date}</p></div>
            
            <div className="blog-post-introduction">
                <h3>
                    {props.introduction}
                </h3>
            </div>
            <div className="blog-post-entry">
                <p>
                    {props.entry}
                </p>
            </div>
        </div>
    );
}