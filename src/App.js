import './App.css';
import Navigation from './components/navigation/Navigation';
import Activity from './components/activity/Activity'
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Main from './components/main/Main';
import Header from './components/header/Header';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function BasicGrid() {
  return (
    <Grid container spacing={3}>
      <Grid item xs={10}>
        <Item sx={{ border: 0, backgroundColor: '#f0f4f7' }}>
          <Navigation />
        </Item>
      </Grid>

      <Grid item xs={2}>
        <Item sx={{ margin: '5px', backgroundColor: '#f0f4f7' }}>
          <Activity />
        </Item>
      </Grid>
    </Grid>
  );
}

function App() {
  return (
    <div className="App">
      <Header />
      <BasicGrid />
    </div>
  );
}

export default App;
