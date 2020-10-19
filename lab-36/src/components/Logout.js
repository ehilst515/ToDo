import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import { useAuth } from '../contexts/auth';

export default function Logout(){
    const { logout } = useAuth();

    function handleLogout(){
        logout();
    }

    return(
        <Button onClick={handleLogout}>Log Out</Button>
    )
}