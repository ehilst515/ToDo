import React from 'react';
import { NavLink, Route } from 'react-router-dom';
import './Nav.css';

export default function () {
    return (
        <nav>
            <ul>
                <Route>
                    <li><NavLink to="/" exact>Home</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                </Route>
            </ul>
        </nav>
    );
}