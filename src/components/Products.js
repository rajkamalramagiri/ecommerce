import React from 'react';
import Header from './Header';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import SelectedProduct from './SelectedProduct';
const drawerWidth = 340;


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },

    drawer: {
        width: drawerWidth,

    },
    // drawerContainer: {
    //     marginTop: '165px',

    // },
    drawerPaper: {
        width: drawerWidth,
        marginTop: '65px',

    },

    content: {
        flexGrow: 1,
        padding: theme.spacing(2),
        marginTop: '65px',

    },
}));


const Products = () => {
    const classes = useStyles();
    const sidebar = [{ text: 'Fruits & Vegetables' }, { text: 'Meat & Fist' }]
    return (
        <>
            <Header products={true} />

            <div className={classes.root}>

                <Drawer
                    className={classes.drawer}
                    variant="permanent"
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                >
                    <div className={classes.drawerContainer}>
                        <List>
                            {

                                ['Fruits & Vegetables', 'Meat & Fish', 'Snacks', 'Pet Care', 'Home & Cleaning', 'Dairy', 'Cooking', 'Breakfast', 'Beverage', 'Beauty & Health'].map(text => (
                                    <ListItem button style={{ marginTop: '10px' }}>
                                        <ListItemIcon><InboxIcon /> </ListItemIcon>
                                        <ListItemText primary={text} />
                                        <ArrowForwardIosIcon fontSize='small' />
                                    </ListItem>
                                ))
                            }


                        </List>

                    </div>
                </Drawer>
                <main className={classes.content}>
                    <SelectedProduct />

                </main>
            </div>
        </>
    )
}

export default Products;