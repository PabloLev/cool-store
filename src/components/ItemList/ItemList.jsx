import Item from '../Item';
import { useEffect, useState } from 'react';
import Products from '../../data/ProductsLocal.json';
import Loader from '../Loader';
import './ItemList.scss';

function ItemList({ titulo }) {
	const [products, setProducts] = useState([]);

	const getData = (data) =>
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
		getData(Products)
			.then((res) => setProducts(res))
			.catch((err) => console.log(err));
	}, []);
	return (
		<section className='itemListContainer'>
			<h1 className='title'>{titulo}</h1>
			<div className='itemListContainer-container'>
				{products.length ? (
					products.map((product) => (
						<Item
							key={product.id}
							id={product.id}
							img={product.img}
							name={product.name}
							price={product.price}
							priceSale={product.priceSale}
							plusLink={product.plusLink}
							stock={product.stock}
						/>
					))
				) : (
					<Loader />
				)}
			</div>
		</section>
	);
}

export default ItemList;
