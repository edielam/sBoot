import { Button } from "@mui/material";
import React from "react";
import {setAuth} from './Login'

function Logout() {
    const log = () => {
        sessionStorage.removeItem("jwt");
        setAuth(false);
       }
    return (
        <div>
            <Button
            variant="outlined"
            color="primary"
            onClick={log}>Logout</Button>
        </div>
    )
}
export default Logout;