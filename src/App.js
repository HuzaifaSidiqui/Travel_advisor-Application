import { CssBaseline, Grid } from '@material-ui/core';
import React from 'react'
import Header from './components/Header/Header';
import List from './components/List/List';
import Maps from './components/Maps/Maps';

const App =() =>{
    return(
        <>
            <CssBaseline/>
            <Header/>
            <Grid container spacing={3} style={{width:'100%'}}>
                <Grid xs={12} md={4}>
                    <List/>
                </Grid>
                <Grid xs={12} md={8}> 
                    <Maps/>
                </Grid>
            </Grid>
        </>
    )
}

export default App;