import React from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useAuth } from '../contexts/auth';

export default function Login() {
    const { login } = useAuth();

    async function handleSubmit(e){
        e.preventDefault();
        const { target } = e;
    
        const { username, password } = target.elements;
    
        if (!await login(username.value, password.value))
        {
          target.reset();
        }
    }

    return (
        <>
        <Form onSubmit={handleSubmit}>
            <Form.Group>
                <h2>Sign in</h2>
                    <Form.Label>User Name</Form.Label>
                    <Form.Control placeholder="Enter your username" name="username"></Form.Control>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Enter your password" name="password"></Form.Control>
                    <Form.Text id="formHelp" className="text-muted">Sign in to see the task list.</Form.Text>
                <Button type="submit">Sign In</Button>
            </Form.Group>
        </Form>
        </>
    );
}