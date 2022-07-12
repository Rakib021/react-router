import React from 'react';
import {  NavLink } from 'react-router-dom';

const Header = () => {
    let activeStyle = {
        textDecoration: "none ",
        fontWeight: "bold",
        color:"red"
      };
    return (
        <nav>
            <NavLink style={({ isActive }) =>
              isActive ? activeStyle : undefined
            } to="/home">Home</NavLink>
            <NavLink style={({ isActive }) =>
              isActive ? activeStyle : undefined
            } to="/friends">Friends</NavLink>
            <NavLink style={({ isActive }) =>
              isActive ? activeStyle : undefined
            } to="/about">About</NavLink>      
        </nav>
    );
};

export default Header;