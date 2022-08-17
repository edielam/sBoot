import '../App.css';
import React, { useState } from 'react';

function Weather() {
    const [temp, setTemp] = useState('');
    const [desc, setDesc] = useState('');
    const [icon, setIcon] = useState('');
    const [isReady, setReady] = useState(false);
    React.useEffect(() => { 
        fetch('http://api.openweathermap.org/data/2.5/weather?q=London&APPID=c36b03a963176b9a639859e6cf279299&units=metric')
        .then(result => result.json())
        .then(jsonresult => {
        setTemp(jsonresult.main.temp);
        setDesc(jsonresult.weather[0].main); 
        setIcon(jsonresult.weather[0].icon);
        setReady(true);
    })
        .catch(err => console.error(err))
  }, [])
    if (isReady) {
        return (
            <div className="App">
            <p>Temperature: {temp} °C</p>
            <p>Description: {desc}</p>
            <img src={'https://res.cloudinary.com/dtpgi0zck/image/upload/s--eWjIe4k---/c_fill,h_260,w_380/v1/EducationHub/photos/lightning-bolts.jpg'} 
            alt="Weather icon" />
            </div>
    );
  }
    else {
        return <div>Loading...</div>
    }
 }
 export default Weather;