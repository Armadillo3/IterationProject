import React from 'react';
import {
	Grid,
	Card,
	CardActionArea,
	CardActions,
	CardContent,
	CardMedia,
	Button,
	Typography,
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreIcon from '@material-ui/icons/More';
import useStyles from '../../style/theme';

const ProductCard = ({
	productName,
	imageUrl,
	storeName,
	productPrice,
	productId,
	deleteProduct,
	storeUrl,
	openInfo,
	setBoxProductId,
}) => {
	const handleClick = () => {
		deleteProduct(productId);
	};

	const moreInfoClick = () => {
		setBoxProductId(productId)
		openInfo()
		
	}

	const classes = useStyles();

	return (
		<>
		<Grid item xs={12} sm={6} md={4} lg={3}>
			<Card
				className={classes.productCard}
				style={{
					display: 'flex',
					flexDirection: 'column',
				}}
			>
		
				<CardActionArea style={{ height: 300 }}>
					<CardMedia
						className={classes.productCardMedia}
						image={imageUrl}
						title={productName}
					/>
				</CardActionArea>
				<CardContent style={{ flexGrow: 1 }}>
					<Typography variant="h6">{productName}</Typography>
					<Typography
						className={classes.productPrice}
						variant="h4"
						color="primary"
					>
						${productPrice}
					</Typography>
					<Typography variant="subtitle1">
						<a href={storeUrl} target="_blank">
							{storeName}
						</a>
					</Typography>
					<Typography variant="overline" display="block">
						Id: {productId}
					</Typography>
				</CardContent>
				<CardActions>
					<Button
<<<<<<< HEAD
						onClick={moreInfoClick}
=======
<<<<<<< HEAD
						onClick={moreInfoClick(productId)}
=======
						id="delete_btn"
						onClick={handleClick}
>>>>>>> 6204fa174a55e58ca735fba351b04a7a9a509949
>>>>>>> main
						variant="contained"
						size="small"
						startIcon={<MoreIcon />}
						style={{ flexGrow: 1 }}
					>
						More Info
					</Button>
					<Button
						onClick={handleClick}
						variant="outlined"
						color="secondary"
						size="small"
						startIcon={<DeleteIcon />}
						style={{ flexGrow: 1 }}
					>
						Delete
					</Button>
				</CardActions>
				
			</Card>
		</Grid>
		</>
	);
};

export default ProductCard;
