import React, { useState } from "react";
import { Dialog, DialogContent,
     DialogTitle, DialogActions, Button, ThemeProvider, TextField } from "@mui/material";
import { theme } from "../constants/constants";


function EditCar(props){
    const [open, setOpen] = useState(false);
    const [car, setCar] = useState({
        brand: '', model: '', color: '', registerNumber: '',
        years: '', price: ''
    })
    const handleClickOpen = () => {
        setOpen(true);
    }
    const handleClickClose = () => {
        setOpen(false);
    }
    return (
        <div>

        </div>
    )
}

export default EditCar;