import { TextField } from "@mui/material";
import { Stack } from "@mui/system";
import React, { useState } from "react";
import { SERVER_URL } from "../constants/constants";

function Login() {
    const [user, setUser] = useState({
        username: '',
        password: ''
    });
    const [isAuthenticated, setAuth] = useState(false);

    return (
        <div>
            <Stack  spacing={2} alignItems='center' mt={2}>
                <TextField>

                </TextField>
                <TextField>

                </TextField>
                <
            </Stack>
        </div>
    )
}

export default Login;