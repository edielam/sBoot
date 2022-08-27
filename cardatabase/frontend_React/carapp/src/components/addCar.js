import React, { useState } from "react";
import { Dialog, DialogContent,
     DialogTitle, DialogActions, Button, ThemeProvider } from "@mui/material";
import { SERVER_URL, theme } from "../constants/constants";


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
    const handleChange = (event) =>{
        setCar({...car, [event.target.name]: event.target.value});
    }
    return(
        <div>
            <ThemeProvider theme={theme}>
                <Button color='primary' variant="contained"
                onClick={handleAdd} size="small">New Car
                </Button>
            </ThemeProvider>
             <Dialog open={open} onClose={handleClose}>
                <DialogTitle>New Car</DialogTitle>
                <DialogContent>
                <input placeholder="Brand" name="brand" 
                value={car.brand} onChange={handleChange}
                /><br/> 
                <input placeholder="Model" name="model" 
                value={car.model} onChange={handleChange}
                /><br/>
                <input placeholder="Color" name="color" 
                value={car.color} onChange={handleChange}/>
                <br/>
                <input placeholder="Register Number" name="registerNumber" 
                value={car.registerNumber} onChange={handleChange}
                /><br/>
                <input placeholder="Year" name="years" 
                value={car.years} onChange={handleChange}/>
                <br/>
                <input placeholder="Price" name="price" 
                value={car.price} onChange={handleChange}/>
                <br/>
                </DialogContent>
                <DialogActions>
                    <ThemeProvider theme={theme}>
                        <Button color='primary' variant="contained"
                        onClick={handleClose} size="small">Cancel</Button>
                        <Button color='primary' variant="outlined"
                        onClick={handleSave} size="small">Save</Button>
                </ThemeProvider>
                </DialogActions>
             </Dialog>
        </div>
    )
}
export default AddCar;