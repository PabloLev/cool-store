import Item from "../Item";
import Loader from "../Loader";
import "./ItemList.scss";
import { NavLink } from "react-router-dom";

function ItemList({ titulo, category, products }) {
	return (
		<section className='itemListContainer'>
			<h1 className='title'>{titulo}</h1>
			<nav>
				<NavLink activeClassName='active' key='all' exact to={`/shop`}>
					<span className='ms-2 me-2 text-uppercase pointer text-a'>
						all
					</span>
				</NavLink>
				<NavLink
					activeClassName='active'
					key='tech'
					exact
					to={`/category/tech`}
				>
					<span className='ms-2 me-2 text-uppercase pointer text-a'>
						tech
					</span>
				</NavLink>
				<NavLink
					activeClassName='active'
					key='home'
					to={`/category/house`}
				>
					<span className='ms-2 me-2 text-uppercase pointer text-a'>
						house
					</span>
				</NavLink>
				<NavLink
					activeClassName='active'
					key='test'
					to={`/category/test`}
				>
					<span className='ms-2 me-2 text-uppercase pointer text-a'>
						test
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
