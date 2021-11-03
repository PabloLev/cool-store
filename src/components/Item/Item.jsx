import { Link } from 'react-router-dom';
import Rating from '../Rating';
import './Item.scss';

function Item({ id, img, name, price, priceSale, plusLink, stock }) {
	return (
		<article className='item'>
			<div className='item-img-container'>
				<img className='item-img' src={img} alt={name} />
				<div className='item-icon-container transition-all'>
					<div className='icon-container pointer'>
						<i className='icon-icon-cart'></i>
					</div>
					<div className='icon-container pointer'>
						<Link to={`${process.env.PUBLIC_URL}/item/${id}`}>
							<i className='icon-icon-search-plus'></i>
						</Link>
					</div>
					<div className='icon-container pointer'>
						<i className='icon-icon-hart'></i>
					</div>
				</div>
			</div>
			<h3 className='item-title'>{name}</h3>
			<Rating />
			<div className='color-icons'>
				<i className='icon-color icon-yellow'></i>
				<i className='icon-color icon-pink'></i>
				<i className='icon-color icon-violet'></i>
			</div>
			<div>
				<span className='item-price'>${(price * priceSale) / 100}</span>
				<span className='item-price promo-price'>${price}</span>
			</div>
		</article>
	);
}

export default Item;
