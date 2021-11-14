import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router';
import { useEffect, useState } from 'react';
import Products from '../../data/Products.json';

function ItemListContainer({ gretting }) {
	const { categoryId } = useParams();
	const [products, setProducts] = useState([]);

	const getData = (data) =>
		new Promise((resolve, reject) => {
			setTimeout(() => {
				if (data) {
					resolve(data);
				} else {
					reject('No se encontró nada');
				}
			}, 1000);
		});

	useEffect(() => {
		getData(Products)
			.then((res) =>
				categoryId
					? setProducts(
							res.filter(
								(product) => product.category === categoryId
							)
					  )
					: setProducts(Products)
			)
			.catch((err) => console.log(err));
	}, [categoryId]);

	return (
		<ItemList titulo={gretting} category={categoryId} products={products} />
	);
}

export default ItemListContainer;
