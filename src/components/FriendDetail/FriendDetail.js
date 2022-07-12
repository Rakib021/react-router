import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const FriendDetail = () => {
    const {friendId} = useParams();
    const [friend,setFriend] = useState({});
    useEffect(()=>{
        const url = `https://jsonplaceholder.typicode.com/users/${friendId}`;
        fetch(url)
        .then(res=>res.json())
        .then(data => setFriend(data))
    },[])
    return (
        <div>
            <h3>Details Coming soon:{friendId}</h3>
            <h3>{friend.name}</h3>
            <h4>{friend.email}</h4>
            <p>{friend.phone}</p>
            {/* object theke object k na paile ?(optional chainning) cinno dithe hoi */}
            <p>{friend.company?.name}</p> 
        </div>
    );
};

export default FriendDetail;