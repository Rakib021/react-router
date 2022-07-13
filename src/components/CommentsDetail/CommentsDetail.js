import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const CommentsDetail = () => {

    const {commentId} = useParams();
    const [comment,setComment] = useState({});
    useEffect(()=>{
        const url = `https://jsonplaceholder.typicode.com/comments/${commentId}`;
        fetch(url)
        .then(res => res.json())
        .then(data=> setComment(data))
    },[])
    const {name,email,body} = comment;
    return (
        <div>
            <h4>Comments Detail : {commentId}</h4>
            <h5>{name}</h5>
            <p>{email}</p>
            <p>{body}</p>
        </div>
    );
};

export default CommentsDetail;