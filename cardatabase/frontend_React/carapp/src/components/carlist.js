import React, { useEffect, useState } from "react";
import { SERVER_URL } from "../constants/constants";

function CarList(){
    const [cars, setCars] = useState([]);
    useEffect(() => {
        fetch(SERVER_URL+'/api/cars')
        .then(response => response.json())
        .then(data => setCars(data._embedded.cars))
        .catch(err => console.error(err));
    }, []);
    return(
        <div>
            <table>
                <tbody>
                    {
                        cars.map((car, index) => 
                        <tr>
                            <td>{car.brand}</td>
                            <td>{car.model}</td>
                            <td>{car.color}</td>
                            <td>{car.year}</td>
                            <td>{car.price}</td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
}
export default CarList;