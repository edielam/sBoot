import React, { useEffect, useState } from "react";
import { columns, SERVER_URL } from "../constants/constants";
import { DataGrid } from '@mui/x-data-grid';

function CarList(){
    const [cars, setCars] = useState([]);
    useEffect(() => {
        fetch(SERVER_URL + 'api/cars')
        .then(response => response.json())
        .then(data => setCars(data._embedded.cars))
        .catch(err => console.error(err));
    }, []);
    
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