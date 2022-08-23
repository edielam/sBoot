import React, { useState } from 'react';
import '../App.css';

function Github() {
 const [keyword, setKeyword] = useState('');
 const [data, setData] = useState([]);
 const fetchData = () => {
    fetch('https://api.github.com/search/repositories?q=${keyword}')
        .then(response => response.json())
        .then(data => setData(data.items))
        .catch(err => console.error(err))
    }
    return (
        <div className="App">
            <input value={keyword} 
            onChange={e => setKeyword(e.target.value)} />
            <button onClick={fetchData}>Fetch</button>
            
        </div>
        );
}
export default Github;