import React, { useEffect, useState } from 'react';
import Friend from '../Friend/Friend';
import './Friends.css';

const Friends = () => {
    const [users,setUsers] = useState([]);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data =>setUsers(data))
    },[])
    return (
        <div>
            <h2>I have Friends : {users.length} </h2>
            <div className="friend-container">
            {
                users.map(user =><Friend 
                    key={user.id}
                friend ={user}
                ></Friend>)
            }
            </div>
        </div>
    );
};

export default Friends;