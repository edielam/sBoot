import Container from '@mui/material/Container';
import { AppBar, Typography, Toolbar } from '@mui/material';
import './App.css';
import { useState } from 'react';
import AddItem from './components/AddItem';

function App() {
  const [items, setItems] = useState([]);
  const addItem = (item) => {
    setItems([item, ...items]);
 }
  return (
    <Container>
      <AppBar position='static'>
        <Toolbar sx={{bgcolor: '#2E3B55'}}>
          <Typography variant='h6'>
            Shopping List
          </Typography>
        </Toolbar>
      </AppBar><br/>
      <AddItem/>
    </Container>
  );
}

export default App;
