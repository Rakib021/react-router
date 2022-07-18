import React, { useEffect, useState } from 'react';
import Todo from '../Todo/Todo';

const Todos = () => {
    const [todos,setTodos] = useState([]);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then(res => res.json())
        .then(data => setTodos(data))
    },[])
    return (
        <div>
            {
                todos.map(todo =><Todo todo ={todo}></Todo>)
            }
        </div>
    );
};

export default Todos;