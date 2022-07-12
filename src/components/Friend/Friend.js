import React from 'react';
import {  Link, useNavigate } from 'react-router-dom';

const Friend = (props) => {
// console.log(props.friend);
    const{id,name,email,phone} =props.friend;
    const navigate = useNavigate();

    const friendStyle ={
        border: '1px solid goldenrod',
        padding: '10px',
        borderRadius: '20px',
        width: '400px',
        margin: '10px',

    }

    const url = `/friend/${id}`;

    const handleFriend=()=>{
        navigate(`/friend/${id}`, { replace: true });

    }
    return (
        <div style={friendStyle}>
            <h5>{id}</h5>
            <h3>{name}</h3>
            <p>{email}</p>
            <p>{phone}</p>
            <Link to={url}>Visit Me</Link>
            <br/>

            <Link to={url}>
            
            <button>Visit me</button>
            </Link>

            <br/>
            <button onClick={handleFriend}>Visit me new</button>
        </div>
    );
};

export default Friend;