import Container from '@mui/material/Container';
import { AppBar, Typography, Toolbar } from '@mui/material';
import './App.css';
import { useState } from 'react';
import AddItem from './components/AddItem';
import Stack from '@mui/material/Stack';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

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
      <List>
        {
          items.map((item, index) => 
            <ListItem key={index} divider>
              <ListItemText 
                primary={item.product}
                secondary={item.amount}
                />
            </ListItem>
          )
        }
      </List>
      </Stack>
    </Container>
  );
}

export default App;
