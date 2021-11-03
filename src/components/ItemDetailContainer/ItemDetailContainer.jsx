import ItemDetail from '../ItemDetail/ItemDetail';
import './ItemDetailContainer.scss';
import Products from '../../data/ProductsLocal.json';
import { useEffect, useState } from 'react';
import Loader from '../Loader';
import { useParams } from 'react-router';

function ItemDetailContainer() {
	const [itemDetail, setItemDetail] = useState(null);
	const { itemId } = useParams();
	// const { itemId } = parseInt(2);
	//Promise
	const getItem = (data) =>
		new Promise((resolve, reject) => {
			setTimeout(() => {
				if (data) {
					resolve(data);
				} else {
					reject('No se encontró nada');
				}
			}, 2000);
		});

	useEffect(() => {
		getItem(Products)
			.then((res) => {
				setItemDetail(res.find((details) => details.id === itemId));
			})

			.catch((err) => console.log(err));
	}, [itemId]);
	console.log(itemDetail);
	return (
		<div className='itemDetailContainer'>
			{itemDetail ? (
				<ItemDetail
					key={itemDetail.id}
					img={itemDetail.img}
					category={itemDetail.category}
					name={itemDetail.name}
					description={itemDetail.description}
					price={itemDetail.price}
					priceSale={itemDetail.priceSale}
					stock={itemDetail.stock}
				/>
			) : (
				<Loader />
			)}
		</div>
	);
}

export default ItemDetailContainer;
