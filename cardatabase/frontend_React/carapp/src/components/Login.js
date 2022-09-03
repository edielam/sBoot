import { Button, TextField } from "@mui/material";
import { Stack } from "@mui/system";
import React, { useState } from "react";
import { SERVER_URL } from "../constants/constants";

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

export default Login;