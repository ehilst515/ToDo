import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css';
import Logout from "./Logout";
import { useAuth } from '../contexts/auth';

export default function () {
    const { user } = useAuth();

    if (!user) {
        return (
            <nav>
                <ul>
                    <li><NavLink to="/" exact>Home</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                </ul>
            </nav>
        );
    }

    if (user) {
        return (
            <nav>
                <ul>
                    <li><NavLink to="/" exact>Home</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <Logout />
                </ul>
            </nav>
        );
    }
}