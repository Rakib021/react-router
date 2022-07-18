import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Todo = (props) => {
    const {id,title,completed} = props.todo;
    let navigate = useNavigate();

    const handleBtn=()=>{
        navigate(`/todo/${id}`, { replace: true });


    }
    return (
        <div>

            <h3>{title}</h3>
            <p>{completed}</p>
            <Link to ={`/todo/${id}`}>Todo Details</Link>
            <button onClick={handleBtn}>click here</button>
        </div>
    );
};

export default Todo;