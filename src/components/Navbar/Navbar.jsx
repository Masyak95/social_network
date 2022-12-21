import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    let activeStyle = {
        textDecoration: "underline",
        color: "cornflowerblue"
    }
    let decoration =
    ({isActive}) => isActive ? activeStyle : undefined

    return <nav className={s.nav}>
        <div className={s.item}>
            <NavLink to="/profile" style={decoration}>Profile</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to="/dialogs" style={decoration}>Messages</NavLink>
        </div>
        <div className={s.item}>
           <NavLink to="/news" style={decoration}>News</NavLink>
        </div>
        <div className={s.item}>
            <a>Music</a>
        </div>
        <div className={s.item}>
            <a>Settings</a>
        </div>
    </nav>
}

export default Navbar;