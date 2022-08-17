import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {
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
  <img src={'http://openweathermap.org/img/wn/${icon}@2x.png'} 
  alt="Weather icon" />
  </div>
  );
  }
  else {
    return <div>Loading...</div>
  }
 }
 export default App;