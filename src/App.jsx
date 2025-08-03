import React from 'react';
import NavBar from './components/NavBar/NavBar';
import Sidebar from './components/Sidebar/Sidebar';
import { Box } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';

const App = () => {
  return (
    <div className='app'>
      <Sidebar />
      <Box width="100%">
        <NavBar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
        </Routes>  
      </Box>
    </div>
  );
}

export default App;
