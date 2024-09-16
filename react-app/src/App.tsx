import React from 'react';
import { CssBaseline, Container } from '@mui/material';
import Home from './pages/Home';

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Home />
      </Container>
    </React.Fragment>
  );
}

export default App;