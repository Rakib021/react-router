import React from 'react';
import {  NavLink } from 'react-router-dom';

const Header = () => {
    let activeStyle = {
        textDecoration: "none ",
        fontWeight: "bold",
        color:"red",
        margin:'20px'
      };
    return (
        <nav>
            <NavLink style={({ isActive }) =>
              isActive ? activeStyle : undefined
            } to="/home">Home</NavLink>
            <NavLink style={({ isActive }) =>
              isActive ? activeStyle : undefined
            } to="/comments">Comments</NavLink>
            <NavLink style={({ isActive }) =>
              isActive ? activeStyle : undefined
            } to="/friends">Friends</NavLink>
            <NavLink style={({ isActive }) =>
              isActive ? activeStyle : undefined
            } to="/about">About</NavLink> 

            <NavLink style={({ isActive }) =>
              isActive ? activeStyle : undefined
            } to="/todos">Todos</NavLink>      
        </nav>
    );
};

export default Header;