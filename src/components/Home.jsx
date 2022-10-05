import { Box } from '@mui/material';
import React from 'react';
import Burger from './Burger';
import Notes from './notes/Notes';

const Home = () => {
  return (
    <Box style={{ display: 'flex', width: '100%' }}>
      <Burger />
      <Notes />
    </Box>
  );
};

export default Home;
