import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const PostDetail = () => {

    const {postId} = useParams();
    const [post,setPost] = useState({});
    useEffect(() =>{
        const url =`https://jsonplaceholder.typicode.com/posts/${postId}`;
        fetch(url)
        .then(res => res.json())
        .then(data=>setPost(data))
    },[])

    const {title} = post;
    return (
        <div>
            <h4>Post Detail :{postId}</h4>
            <h5>{title}</h5>
        </div>
    );
};

export default PostDetail;