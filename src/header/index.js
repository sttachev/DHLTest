import React, { Component } from "react";
import './style.css'
import Selector from "../selector";
import { Link } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <div className="header-container">
                <Link to="/" className="homebtn">Home</Link>
                <span><Selector /></span>
                <span>
                <Link to="/favalbum" className="favoritebtn">Favorites</Link>
                </span>
                <span>
                <Link to="/all" className="favoritebtn">All</Link>
                </span>
            </div>
        )
    }
}

export default Header;
