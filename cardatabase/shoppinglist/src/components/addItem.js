import React, { useState } from "react";
import { Button, TextField, Dialog, DialogActions, 
DialogContent, DialogTitle } from "@mui/material";
import { createTheme, ThemeProvider } from '@mui/material/styles';

function AddItem(props){
    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(true);
    } 
    const handleClose = () => {
        setOpen(false);
    }
    const [item, setItem] = useState({
        product: '',
        amount: ''
    })
    const addItem = () => {
        props.addItem(item);
        setItem({product:'', amount:''});
        handleClose();
     }
    const handleChange = (e) => {
        setItem({...item, [e.target.name]: e.target.value})
    }
    const theme = createTheme({
            status: {
                danger: '#e53e3e',
            },
            palette: {
                primary: {
                main: '#0971f1',
                darker: '#053e85',
                },
                neutral: {
                main: '#2E3B55',
                contrastText: '#fff',
                },
            },
    });

    return (
        <div>
            <Button onClick={handleOpen} color='inherit' variant="outlined">
                Add Item
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>New Item</DialogTitle>
                <DialogContent>
                <TextField value={item.product} margin="dense"
                    onChange={handleChange} name="product" 
                    label="Product" fullWidth />
                    <TextField value={item.amount} margin="dense"
                    onChange={handleChange} name="amount" 
                    label="Amount" fullWidth />
                </DialogContent>
                <DialogActions>
                    <ThemeProvider theme={theme}>
                        <Button onClick={addItem} color='primary' variant="contained">
                        Add
                        </Button>
                        <Button onClick={handleClose} color='neutral' variant="contained">
                        Cancel
                        </Button>
                    </ThemeProvider>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default AddItem;