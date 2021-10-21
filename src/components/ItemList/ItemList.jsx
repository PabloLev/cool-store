import Item from '../Item';
import { useEffect, useState } from 'react';
import Products from '../../data/Products.json';

function ItemList() {
	const [products, setProducts] = useState([]);

	const getData = (data) =>
		new Promise((resolve, reject) => {
			setTimeout(() => {
				if (data) {
					resolve(data);
				} else {
					reject('No se encontró nada');
				}
			}, 500);
		});

	useEffect(() => {
		getData(Products)
			.then((res) => setProducts(res))
			.catch((err) => console.log('error, no se está pasando nada'));
	}, []);
	console.log(products);
	return (
		<>
			{products.map((product) => (
				<Item
					img={product.img}
					name={product.name}
					price={product.price}
					priceSale={product.priceSale}
					plusLink={product.plusLink}
					stock={product.stock}
					key={product.id}
				/>
			))}
		</>
	);
}

export default ItemList;
