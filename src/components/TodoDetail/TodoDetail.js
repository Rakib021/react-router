import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const TodoDetail = () => {
    const {todoId} = useParams();
    const [todo ,setTodo] = useState({});
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`)
        .then(res =>res.json())
        .then(data => setTodo(data))
    },[])

    const {completed,title} = todo;
    return (
        <div>
            <h3>Todo Details:{todoId}</h3>
            <h4>{title}</h4>
            <p>{completed}</p>
        </div>
    );
};

export default TodoDetail;