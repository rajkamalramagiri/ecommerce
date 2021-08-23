import React from 'react';
import { alpha, makeStyles } from '@material-ui/core/styles';
import HelpIcon from '@material-ui/icons/Help';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import CssBaseline from '@material-ui/core/CssBaseline';
const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
    zIndex: 10,
  },
  appBar: {
    backgroundColor: 'rgb(248, 241, 232)'

  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  button: {
    margin: theme.spacing(1),
    backgroundColor: 'green'
  },
  search: {
    position: 'relative',
    flexGrow: 1,

    borderRadius: theme.shape.borderRadius,
    backgroundColor: 'white',
    marginLeft: 20,
    marginRight: 20,


  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {

    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,

  },

}));


const Header = ({ products }) => {
  const classes = useStyles();
  return (
    <div className={classes.grow}>
      <AppBar position="fixed" elevation={1}
        className={classes.appBar}
      >
        <Toolbar>
          <Typography variant="h6" noWrap>

            <span style={{ color: 'black' }}>
              Pick
                </span>
            <span style={{ color: 'green' }}>
              Bazar
                </span>
          </Typography>
          {

            products ? (

              <div className={classes.search}>
                <div className={classes.searchIcon}>
                  <SearchIcon />
                </div>
                <InputBase fullWidth
                  placeholder="Search your products from here"
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                  }}
                  inputProps={{ 'aria-label': 'search' }}
                />
              </div>) : <div className={classes.grow} />
          }
          {/* <div className={classes.grow} /> */}
          <div style={{ cursor: 'pointer', marginRight: '5px' }}>Offer</div>
          <div style={{ display: 'flex', alignItems: 'center', marginLeft: '30px', marginRight: '30px', cursor: 'pointer' }}>
            <HelpIcon />
              Need Help
            </div>
          <div style={{ display: 'flex', alignItems: 'center', marginLeft: '10px', cursor: 'pointer' }}>
            <img src='https://uxwing.com/wp-content/themes/uxwing/download/46-flags-landmarks/united-states.png' width='20px' />
            <span style={{ color: 'green', marginLeft: '10px', marginRight: '20px' }}>
              English
              </span>
          </div>
          <div>
            <Button variant="contained" color="primary"
              className={classes.button}

            >
              Join
</Button>
          </div>
        </Toolbar>
      </AppBar>
      <CssBaseline />

    </div>
  );
}

export default Header;