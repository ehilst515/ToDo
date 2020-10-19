import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css';
import Logout from "./auth/Logout";
import { useAuth } from '../contexts/auth';
import Auth from './auth';

export default function () {
    const { user } = useAuth();
        return (
            <nav>
                <ul>
                    <li><NavLink to="/" exact>Home</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <Auth>
                        <Logout />
                    </Auth>
                </ul>
            </nav>
        );
}