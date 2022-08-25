import Container from '@mui/material/Container';
import { AppBar, Typography, Toolbar } from '@mui/material';
import './App.css';

function App() {
  return (
    <Container>
      <AppBar position='static'>
        <Toolbar>
          <Typography variant='h6'>
            Shopping List
          </Typography>
        </Toolbar>
      </AppBar>
    </Container>
  );
}

export default App;
