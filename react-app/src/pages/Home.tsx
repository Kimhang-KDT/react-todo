import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import TodoForm from '../components/TodoForm';

const Home: React.FC = () => {
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Todo List
        </Typography>
        <TodoForm />
        {/* TodoList component will be added here later */}
      </Box>
    </Container>
  );
};

export default Home;