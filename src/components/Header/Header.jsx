import React from 'react'
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import useStyles from './styles'
import { Autocomplete } from "@react-google-maps/api";
import { AppBar, Toolbar, Typography, Box,InputBase } from "@material-ui/core";
import { ClassNames } from '@emotion/react';
import SearchIcon from '@material-ui/icons/Search';
const Header = () => {
  const classes =useStyles();
  return (
    <AppBar position="static">
        <Toolbar className={classes.toolbar}>
          <Typography variant='h5' className={classes.title}>
            Travel Advisor
          </Typography>
          <Box display="flex">
            <Typography variant='h5' className={classes.title}>
              Explore new places
            </Typography>
            {/* <Autocomplete> */}
              <div className={classes.search}>
                <div className={classes.searchIcon}> 
                  <SearchIcon/>
                </div>
                <InputBase placeholder='Search...' classes={{root:classes.input, input:classes.inputInput}}/>
              </div>
            {/* </Autocomplete> */}
          </Box>
        </Toolbar>
    </AppBar>
  )
}

export default Header