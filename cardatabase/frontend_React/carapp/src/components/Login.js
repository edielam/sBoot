import { Button, TextField } from "@mui/material";
import { Stack } from "@mui/system";
import React, { useState } from "react";
import { SERVER_URL } from "../constants/constants";
import CarList from "./carlist";

function Login() {
    const [user, setUser] = useState({
        username: '',
        password: ''
    });
    const [isAuthenticated, setAuth] = useState(false);
    const handleChange = (event) => {
        setUser({...user, 
            [event.target.name] : event.target.value});
    }
    const login = () => {
        fetch(SERVER_URL + 'login', {
            method: 'POST',
            headers: { 'Content-Type':'application/json' },
            body: JSON.stringify(user)
        })
        .then(edRes => {
            const jwToken = edRes.headers.get('Authorization');
            if (jwToken !== null) {
                sessionStorage.setItem("jwt", jwToken);
                setAuth(true);
            }
        })
        .catch(err) = console.error(err)
    }
    if(isAuthenticated){
        return <CarList/>;
    }
    else{
        return (
            <div>
                <Stack  spacing={2} alignItems='center' mt={2}>
                    <TextField
                        name="username"
                        label="Username"
                        onChange={handleChange}/>
                    <TextField
                        name="password"
                        label="Password"
                        onChange={handleChange}/>
                    <Button
                        variant="outlined"
                        color="secondary"
                        onClick={login}>
                        Login</Button>
                </Stack>
            </div>
        )
    }
}

export default Login;