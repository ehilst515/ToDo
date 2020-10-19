import React, { useContext, useState } from 'react';

const userAPI = 'https://deltav-todo.azurewebsites.net/api/v1/Users';
export const AuthContext = React.createContext();

export function useAuth() {
    const auth = useContext(AuthContext);
    if (!auth) throw new Error("You are missing AuthProvider!");
    return auth;
}

export function AuthProvider(props) {
    const [state, setState] = useState({
        user: null,
        login,
        logout
    })

    function setUser(user) {
        setState(prevState => ({
            ...prevState,
            user,
        }));
    }

    async function login(username, password) {
        const result = await fetch(`${userAPI}/Login`, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password }),
        });

        const resultBody = await result.json();

        if (result.ok) {
            return setUser(resultBody);
        }

        logout();
    }

    function logout() {
        setUser(null);
    }

    return (
        <AuthContext.Provider value={state}>
            {props.children}
        </AuthContext.Provider>
    )
}