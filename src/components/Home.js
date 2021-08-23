import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import { Chip } from '@material-ui/core';
import {
  Link
} from "react-router-dom";
import Header from './Header';
import './home.css'
const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 500,
    backgroundColor: 'white',
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
  button: {
    margin: theme.spacing(1),
    backgroundColor: 'green'
  },
}));
const Home = () => {
  const classes = useStyles();
  return (
    <>
      <Header />

      <div className='home'>
        <h1>Groceries Delivered in 90 Minutes</h1>
        <h5 style={{ color: 'gray' }}>Get your healthy food & snacks delivered at your doorsteps all day everyday</h5>
        <div>
          <div component="form" className='form'>
            <Chip label="Grocery" />



            <InputBase
              className={classes.input}
              placeholder="Search your products from here"
              inputProps={{ 'aria-label': 'search google maps' }}
            />
            <Link
              style={{ textDecoration: 'none' }}
              to='/products'>
              <Button
                variant="contained"
                color="secondary"
                className={classes.button}
                startIcon={<SearchIcon />}
              >
                Search
      </Button>
            </Link>

          </div>
        </div>
      </div>
    </>
  )
}

export default Home;