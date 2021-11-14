import { Link } from 'react-router-dom';
import Rating from '../Rating';
import './Item.scss';
import { useContext } from 'react';
import { CartContext } from '../../Context/cartContext';

function Item({ item }) {
	const { addItem, updateItemsInCart } = useContext(CartContext);
	const handleClick = () => {
		addItem(item, 1);
		updateItemsInCart(item, -1);
	};

	return (
		<article className='item'>
			<div className='item-img-container'>
				{item.discount !== 0 && (
					<span className='discount'>{item.discount}% off</span>
				)}
				<img className='item-img' src={item.img} alt={item.name} />
				<div className='item-icon-container transition-all'>
					<div className='icon-container pointer'>
						<i onClick={handleClick} className='icon-icon-cart'></i>
					</div>
					<div className='icon-container pointer'>
						<Link to={`/item/${item.id}`}>
							<i className='icon-icon-search-plus'></i>
						</Link>
					</div>
					<div className='icon-container pointer'>
						<i className='icon-icon-hart'></i>
					</div>
				</div>
			</div>
			<h3 className='item-title'>{item.name}</h3>

			<Rating />
			<span className='text-uppercase'>{item.category}</span>
			<div className='color-icons'>
				<i className='icon-color icon-yellow'></i>
				<i className='icon-color icon-pink'></i>
				<i className='icon-color icon-violet'></i>
			</div>

			<div>
				{item.discount !== 0 ? (
					<>
						<span className='item-price'>
							${item.price * (1 - item.discount / 100)}
						</span>
						<span className='item-price promo-price'>
							${item.price}
						</span>
					</>
				) : (
					<span className='item-price'>${item.price}</span>
				)}
			</div>
		</article>
	);
}

export default Item;
