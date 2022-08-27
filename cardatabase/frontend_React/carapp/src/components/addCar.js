import React, { useState } from "react";
import { Dialog, DialogContent,
     DialogTitle, DialogActions } from "@mui/material";


function AddCar(props){
    const [open, setOpen] = useState(false)
    const [car, setCar] = useState({
        brand: '',
        model: '',
        color: '',
        registerNumber: '',
        years: '',
        price: ''
    })
    const handleAdd = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const handleChnage = (event) =>{
        setCar({...car, [event.target.name]: event.target.value});
    }
    return(
        <div>

        </div>
    )
}
export default AddCar;