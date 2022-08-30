import React, { Fragment, useEffect, useState } from "react";
import { SERVER_URL } from "../constants/constants";
import { DataGrid} from '@mui/x-data-grid';
import { Alert, AlertTitle, Button, Snackbar } from "@mui/material";
import AddCar from "./addCar";
import EditCar from "./EditCar";

function CarList(){
    const [cars, setCars] = useState([]);
    useEffect(() => {
        fetch(SERVER_URL + 'api/cars')
        .then(response => response.json())
        .then(data => setCars(data._embedded.cars))
        .catch(err => console.error(err));
    }, []);
    const columns = [
        {field: 'brand', headerName: 'Brand', width: 200},
        {field: 'model', headerName: 'Model', width: 200},
        {field: 'color', headerName: 'Color', width: 200},
        {field: 'registerNumber', headerName: 'Register Number', width: 200},
        {field: 'years', headerName: 'Year', width: 200},
        {field: 'price', headerName: 'Price', width: 200},
        {
            field: '_links.self.href', 
            headerName: '', 
            sortable: false,
            filterable: false,
            renderCell: row => 
            <EditCar data={row} updateCar={updateCar}/>
        },
        {
            field: '_links.self.href', 
            headerName: '', 
            sortable: false,
            filterable: false,
            renderCell: row => 
            <Button color='primary' variant="contained"
            onClick={() => onDelClick(row.id)} size="small">Delete
            </Button>,
             width: 150
            }
    ]

    const fetchCars= () => {
        fetch(SERVER_URL + 'api/cars')
        .then(response => response.json())
        .then(data => setCars(data._embedded.cars))
        .catch(err => console.error(err));
    }
    useEffect(() => {
        fetchCars();
    }, []);
    
    const onDelClick =(url) => {
        if (window.confirm("Please Confirm")) {
            fetch(url, {method: 'DELETE'})
            .then(response => {if(response.ok){fetchCars(); setOpen(true);}
            else {
                alert('Something went wrong!');
                }
            })
            .catch(err => console.error(err))
            }
    }
    const [open, setOpen] = useState(false);
    const addTheCar = (car) => {
        fetch(SERVER_URL + 'api/cars',
        {
        method: 'POST', 
        headers: { 'Content-Type':'application/json' },
        body: JSON.stringify(car)
        })
        .then(response => {
        if (response.ok) {
        fetchCars();
        }
        else {
            <Alert severity="error">
                <AlertTitle>Error</AlertTitle>
                Something went <strong>wrong!</strong>
            </Alert>
        }
    })
        .catch(err => console.error(err))
    }
    const updateCar = (car, link) => {
        fetch(link, {method: 'PUT'})
        .then(response => {if(response.ok){fetchCars(); setOpen(true);}
        else {
            alert('Something went wrong!');
            }
        })
        .catch(err => console.error(err))
    }
    return(
        <Fragment>
            <AddCar addCar={addTheCar}/><br/>
            <div  style={{ height: 500, width: '100%' }}>
            <DataGrid
            rows={cars}
            columns= {columns}
            getRowId={row => row._links.self.href}/>
            <Snackbar
            open={open}
            autoHideDuration={2500}
            onClose={() => setOpen(false)}
            message="Removed successfully!"
            />
        </div>
        </Fragment>
    );
}
export default CarList;