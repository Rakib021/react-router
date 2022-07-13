import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";


const Post = (props) => {
    const {id,title,body} = props.post;
    let navigate = useNavigate();

    const handlePostDetails =()=>{
        navigate(`/post/${id}`, { replace: true });


    }
    return (
        <div>
            <h3>Id :{id}</h3>
            <h5>{title}</h5>
            <p>{body}</p>
            <Link to={`/post/${id}`}>Post Detail</Link>
            <br/>
            <button onClick={handlePostDetails}>Click to see Details</button>
        </div>
    );
};

export default Post;