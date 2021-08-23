import React from 'react'
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

function rand() {
    return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        width: 200,
        margin: '10px',
        overflowX: 'hidden',

    },
    media: {
        height: 180,
    },
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

const SelectedProduct = () => {
    const products = [{ image: 'https://st2.depositphotos.com/1006597/6549/i/600/depositphotos_65490531-stock-photo-fresh-limes.jpg', name: 'lime', quantity: '12pc(s)', amount: '$1.5', description: "The origin of the lemon is unknown, though lemons are thought to have first grown in Assam (a region in northeast India), northern Burma or China.[2][failed verification] A genomic study of the lemon indicated it was a hybrid between bitter orange (sour orange) and citron.[3][4] " },

    { image: 'https://thumbs.dreamstime.com/b/lemon-fruit-22881850.jpg', name: 'lemon', quantity: '12pc(s)', amount: '$1.5', description: "The origin of the lemon is unknown, though lemons are thought to have first grown in Assam (a region in northeast India), northern Burma or China.[2][failed verification] A genomic study of the lemon indicated it was a hybrid between bitter orange (sour orange) and citron.[3][4] " },

    { image: 'https://www.healthifyme.com/blog/wp-content/uploads/2020/02/mangoes-cover-1.jpg', name: 'mango', quantity: '12pc(s)', amount: '$1.5', description: "The origin of the lemon is unknown, though lemons are thought to have first grown in Assam (a region in northeast India), northern Burma or China.[2][failed verification] A genomic study of the lemon indicated it was a hybrid between bitter orange (sour orange) and citron.[3][4] " },


    { image: 'https://st2.depositphotos.com/7036298/10694/i/600/depositphotos_106948346-stock-photo-ripe-red-apple-with-green.jpg', name: 'apple', quantity: '12pc(s)', amount: '$1.5', description: "The origin of the lemon is unknown, though lemons are thought to have first grown in Assam (a region in northeast India), northern Burma or China.[2][failed verification] A genomic study of the lemon indicated it was a hybrid between bitter orange (sour orange) and citron.[3][4] " },

    { image: 'https://st2.depositphotos.com/1006597/6549/i/600/depositphotos_65490531-stock-photo-fresh-limes.jpg', name: 'lime', quantity: '12pc(s)', amount: '$1.5', description: "The origin of the lemon is unknown, though lemons are thought to have first grown in Assam (a region in northeast India), northern Burma or China.[2][failed verification] A genomic study of the lemon indicated it was a hybrid between bitter orange (sour orange) and citron.[3][4] " },

    { image: 'https://thumbs.dreamstime.com/b/lemon-fruit-22881850.jpg', name: 'lemon', quantity: '12pc(s)', amount: '$1.5', description: "The origin of the lemon is unknown, though lemons are thought to have first grown in Assam (a region in northeast India), northern Burma or China.[2][failed verification] A genomic study of the lemon indicated it was a hybrid between bitter orange (sour orange) and citron.[3][4] " },

    { image: 'https://www.healthifyme.com/blog/wp-content/uploads/2020/02/mangoes-cover-1.jpg', name: 'mango', quantity: '12pc(s)', amount: '$1.5', description: "The origin of the lemon is unknown, though lemons are thought to have first grown in Assam (a region in northeast India), northern Burma or China.[2][failed verification] A genomic study of the lemon indicated it was a hybrid between bitter orange (sour orange) and citron.[3][4] " },


    { image: 'https://st2.depositphotos.com/7036298/10694/i/600/depositphotos_106948346-stock-photo-ripe-red-apple-with-green.jpg', name: 'apple', quantity: '12pc(s)', amount: '$1.5', description: "The origin of the lemon is unknown, though lemons are thought to have first grown in Assam (a region in northeast India), northern Burma or China.[2][failed verification] A genomic study of the lemon indicated it was a hybrid between bitter orange (sour orange) and citron.[3][4] " },
    { image: 'https://st2.depositphotos.com/1006597/6549/i/600/depositphotos_65490531-stock-photo-fresh-limes.jpg', name: 'lime', quantity: '12pc(s)', amount: '$1.5', description: "The origin of the lemon is unknown, though lemons are thought to have first grown in Assam (a region in northeast India), northern Burma or China.[2][failed verification] A genomic study of the lemon indicated it was a hybrid between bitter orange (sour orange) and citron.[3][4] " },

    { image: 'https://thumbs.dreamstime.com/b/lemon-fruit-22881850.jpg', name: 'lemon', quantity: '12pc(s)', amount: '$1.5', description: "The origin of the lemon is unknown, though lemons are thought to have first grown in Assam (a region in northeast India), northern Burma or China.[2][failed verification] A genomic study of the lemon indicated it was a hybrid between bitter orange (sour orange) and citron.[3][4] " },

    { image: 'https://www.healthifyme.com/blog/wp-content/uploads/2020/02/mangoes-cover-1.jpg', name: 'mango', quantity: '12pc(s)', amount: '$1.5', description: "The origin of the lemon is unknown, though lemons are thought to have first grown in Assam (a region in northeast India), northern Burma or China.[2][failed verification] A genomic study of the lemon indicated it was a hybrid between bitter orange (sour orange) and citron.[3][4] " },


    { image: 'https://st2.depositphotos.com/7036298/10694/i/600/depositphotos_106948346-stock-photo-ripe-red-apple-with-green.jpg', name: 'apple', quantity: '12pc(s)', amount: '$1.5', description: "The origin of the lemon is unknown, though lemons are thought to have first grown in Assam (a region in northeast India), northern Burma or China.[2][failed verification] A genomic study of the lemon indicated it was a hybrid between bitter orange (sour orange) and citron.[3][4] " },
    { image: 'https://st2.depositphotos.com/1006597/6549/i/600/depositphotos_65490531-stock-photo-fresh-limes.jpg', name: 'lime', quantity: '12pc(s)', amount: '$1.5', description: "The origin of the lemon is unknown, though lemons are thought to have first grown in Assam (a region in northeast India), northern Burma or China.[2][failed verification] A genomic study of the lemon indicated it was a hybrid between bitter orange (sour orange) and citron.[3][4] " },

    { image: 'https://thumbs.dreamstime.com/b/lemon-fruit-22881850.jpg', name: 'lemon', quantity: '12pc(s)', amount: '$1.5', description: "The origin of the lemon is unknown, though lemons are thought to have first grown in Assam (a region in northeast India), northern Burma or China.[2][failed verification] A genomic study of the lemon indicated it was a hybrid between bitter orange (sour orange) and citron.[3][4] " },

    { image: 'https://www.healthifyme.com/blog/wp-content/uploads/2020/02/mangoes-cover-1.jpg', name: 'mango', quantity: '12pc(s)', amount: '$1.5', description: "The origin of the lemon is unknown, though lemons are thought to have first grown in Assam (a region in northeast India), northern Burma or China.[2][failed verification] A genomic study of the lemon indicated it was a hybrid between bitter orange (sour orange) and citron.[3][4] " },


    { image: 'https://st2.depositphotos.com/7036298/10694/i/600/depositphotos_106948346-stock-photo-ripe-red-apple-with-green.jpg', name: 'apple', quantity: '12pc(s)', amount: '$1.5', description: "The origin of the lemon is unknown, though lemons are thought to have first grown in Assam (a region in northeast India), northern Burma or China.[2][failed verification] A genomic study of the lemon indicated it was a hybrid between bitter orange (sour orange) and citron.[3][4] " },
    ]
    const classes = useStyles();

    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);
    const [product, setProduct] = React.useState(null)

    const handleOpen = (e, product) => {
        setOpen(true);
        setProduct(product)
        console.log('product', product)
    };

    const handleClose = (product) => {
        setOpen(false);

    };

    const body = (
        <div style={modalStyle} className={classes.paper}>
            <h2 id="simple-modal-title">{product?.name}</h2>

            <Typography variant="body2" gutterBottom color="textSecondary" component="p">
                {product?.quantity}
            </Typography>
            <p id="simple-modal-description" style={{ textAlign: 'justify' }}>
                {product?.description}
            </p>


            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '10px' }}>
                <Typography gutterBottom variant="body1" component="p" color='primary'>
                    {product?.amount}
                </Typography>
                <Button
                    variant="outlined"
                    color="primary"
                    startIcon={<ShoppingBasketIcon />}
                >
                    Cart
                        </Button>

            </div>

        </div>
    );


    return (
        <>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {

                    products.map(product => (

                        <Card className={classes.root}
                            onClick={(e) => handleOpen(e, product)}

                        >
                            <CardActionArea>
                                <CardMedia
                                    className={classes.media}
                                    image={product.image}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        {product.name}
                                    </Typography>
                                    <Typography variant="body2" gutterBottom color="textSecondary" component="p">
                                        {product.quantity}
                                    </Typography>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '10px' }}>
                                        <Typography gutterBottom variant="body1" component="p" color='primary'>
                                            {product.amount}
                                        </Typography>
                                        <Button
                                            variant="outlined"
                                            color="primary"
                                            startIcon={<ShoppingBasketIcon />}
                                        >
                                            Cart
                        </Button>

                                    </div>
                                </CardContent>
                            </CardActionArea>
                        </Card>

                    ))
                }


            </div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                {body}

            </Modal>
        </>
    )
}

export default SelectedProduct;