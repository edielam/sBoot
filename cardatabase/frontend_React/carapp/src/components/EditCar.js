import React, { useState } from "react";
import { Dialog, DialogContent,
     DialogTitle, DialogActions, Button, ThemeProvider, TextField } from "@mui/material";
import { theme } from "../constants/constants";


function EditCar(props){
    const [open, setOpen] = useState(false);
    const [car, setCar] = useState({
        brand: '', model: '', color: '', registerNumber: '',
        years: '', price: ''
    });
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClickClose = () => {
        setOpen(false);
    };
    const handleChange = (event) => {
        setCar({...car, [event.target.name]: event.target.value});
    };
    const handleSave = () => {

    }
    return (
        <div>
            <ThemeProvider>
                <Button onClick={handleClickOpen} color='primary' variant="outlined"
                size="small">Edit</Button> 
            </ThemeProvider>
            <Dialog>
                <DialogTitle>Change Car Details</DialogTitle>
                <DialogContent>
                <input placeholder="Brand" name="brand" 
                value={car.brand}onChange={handleChange}
                /><br/> 
                <input placeholder="Model" name="model" 
                value={car.model}onChange={handleChange}
                /><br/>
                <input placeholder="Color" name="color" 
                value={car.color}onChange={handleChange}
                /><br/>
                <input placeholder="Register Number" name="registerNumber" 
                value={car.registerNumber}onChange={handleChange}
                /><br/>
                <input placeholder="Year" name="years" 
                value={car.year} 
                onChange={handleChange}/><br/>
                <input placeholder="Price" name="price" 
                value={car.price}onChange={handleChange}
                /><br/>
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default EditCar;