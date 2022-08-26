import Container from '@mui/material/Container';
import { AppBar, Typography, Toolbar } from '@mui/material';
import './App.css';
import { useState } from 'react';
import AddItem from './components/AddItem';
import Stack from '@mui/material/Stack';

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
      <Stack alignItems='center'>
      <AddItem addItem={addItem}/>
      </Stack>
    </Container>
  );
}

export default App;
