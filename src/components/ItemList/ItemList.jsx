import Item from '../Item';
import { useEffect, useState } from 'react';
import Products from '../../data/Products.json';
import Loader from '../Loader';
import './ItemList.scss';
import { NavLink } from 'react-router-dom';

function ItemList({ titulo, category }) {
	const [products, setProducts] = useState([]);
	// const { category } = useParams();
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
				category
					? setProducts(
							res.filter(
								(product) => product.category === category
							)
					  )
					: setProducts(Products)
			)
			.catch((err) => console.log(err));
	}, [category]);

	return (
		<section className='itemListContainer'>
			<h1 className='title'>{titulo}</h1>
			<nav>
				<NavLink activeClassName='active' key='all' exact to={`/shop`}>
					<span className='ms-2 me-2 text-uppercase pointer'>
						all
					</span>
				</NavLink>
				<NavLink
					activeClassName='active'
					key='tech'
					exact
					to={`/category/tech`}
				>
					<span className='ms-2 me-2 text-uppercase pointer'>
						tech
					</span>
				</NavLink>
				<NavLink
					activeClassName='active'
					key='home'
					to={`/category/house`}
				>
					<span className='ms-2 me-2 text-uppercase pointer'>
						house
					</span>
				</NavLink>
			</nav>

			<div className='itemListContainer-container'>
				{products.length ? (
					products.map((product) => (
						<Item key={product.id} item={product} />
					))
				) : (
					<Loader />
				)}
			</div>
		</section>
	);
}

export default ItemList;
