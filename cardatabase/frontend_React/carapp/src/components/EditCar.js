import React, { useState } from "react";
import { Dialog, DialogContent,
     DialogTitle, DialogActions, Button, ThemeProvider} from "@mui/material";
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
            <button onClick={handleClickOpen}>Edit</button>
            <Dialog  open={open} onClose={handleClickClose}>
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
                <DialogActions>
                <ThemeProvider theme={theme}>
                        <Button color='primary' variant="contained"
                        onClick={handleClickClose} size='medium'>Cancel</Button>
                        <Button color='primary' variant="outlined"
                        onClick={handleSave} size='medium'>Save</Button>
                </ThemeProvider>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default EditCar;