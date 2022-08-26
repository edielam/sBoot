import React, { useState } from "react";
import { Button, TextField, Dialog, DialogActions, 
DialogContent, DialogTitle } from "@mui/material";

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
    const [items, setItems] = useState([]);
    const addItem = (item) => {
        setItems([item, ...items]);
     }
    return (
        <div>
            <Button onClick={handleOpen} color='inherit' variant="outlined">
                Add Item
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>New Item</DialogTitle>
                <DialogContent></DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color='inherit' variant="contained">
                    Cancel
                    </Button>
                    <Button onClick={addItem} color='inherit' variant="contained">
                    Add
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default AddItem;