import React, { useState } from "react";
import { Dialog, DialogContent,
     DialogTitle, DialogActions, Button, ThemeProvider, TextField } from "@mui/material";
import { theme } from "../constants/constants";


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
    const handleSave = () => {
        props.addCar(car);
        handleClose();
       }
    return(
        <div>
            <ThemeProvider theme={theme}>
                <Button color='primary' variant="contained"
                onClick={handleAdd} size="small">New Car
                </Button>
            </ThemeProvider>
             <Dialog open={open} onClose={handleClose} maxWidth='xs' fullWidth='true'>
                <DialogTitle>New Car</DialogTitle>
                <DialogContent>
                <TextField autoFocus
                    margin="normal" id="brand" fullWidth label="Brand"
                    type="email" variant="filled" onChange={handleChange}
                /><br/>
                <TextField autoFocus
                    margin="normal" id="model" label="Model" fullWidth
                    type="email" variant="filled" onChange={handleChange}
                /><br/>
                <TextField autoFocus
                    margin="normal" id="color" label="Color" fullWidth
                    type="email" variant="filled" onChange={handleChange}
                /><br/>
                <TextField autoFocus
                    margin="normal" id="registerNumber" label="Register Number"
                    type="email" variant="filled" onChange={handleChange} fullWidth
                /><br/>
                <TextField autoFocus
                    margin="normal" id="years" label="Year" fullWidth
                    type="email" variant="filled" onChange={handleChange}
                /><br/>
                <TextField autoFocus
                    margin="normal" id="price" label="Price" fullWidth
                    type="email" variant="filled" onChange={handleChange}
                /><br/>
                </DialogContent>
                <DialogActions>
                    <ThemeProvider theme={theme}>
                        <Button color='primary' variant="contained"
                        onClick={handleClose} size='medium'>Cancel</Button>
                        <Button color='primary' variant="outlined"
                        onClick={handleSave} size='medium'>Save</Button>
                </ThemeProvider>
                </DialogActions>
             </Dialog>
        </div>
    )
}
export default AddCar;