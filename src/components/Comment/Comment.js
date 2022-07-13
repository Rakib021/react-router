import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Comment = (props) => {
    const {id,name,email} = props.comment;
    let navigate = useNavigate();

    const handleComment =() =>{
        navigate(`/comment/${id}`, { replace: true });

    }
    return (
        <div>
            <h4>{name}</h4>
            <p>{email}</p>
            <Link to={`/comment/${id}`}>comment-Detail</Link>
            <button onClick={handleComment}>Click me</button>
        </div>
    );
};

export default Comment;