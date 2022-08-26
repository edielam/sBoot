import React, { useEffect, useState } from "react";
import { SERVER_URL } from "../constants/constants";
import { DataGrid } from '@mui/x-data-grid';
import { Button } from "@mui/material";

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
        {field: 'years', headerName: 'Year', width: 150},
        {field: 'price', headerName: 'Price', width: 150},
        {
            field: '_links.self.href', 
            headerName: '', 
            sortable: false,
            filterable: false,
            renderCell: row => 
            <Button color='primary' variant="contained"
            onClick={() => onDelClick(row.id)}>Delete
            </Button>
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
        fetch(url, {method: 'DELETE'})
        .then(response => fetchCars())
        .catch(err => console.error(err));
    }
    return(
        <div  style={{ height: 500, width: '100%' }}>
            <DataGrid
            rows={cars}
            columns= {columns}
            getRowId={row => row._links.self.href}/>
        </div>
    );
}
export default CarList;