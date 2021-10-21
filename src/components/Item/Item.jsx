import { useState } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import './Item.scss';

function Item({ img, name, price, priceSale, plusLink, stock }) {
	const [counterValue, setCounterValue] = useState(0);

	const sum = () => {
		counterValue < stock
			? setCounterValue(counterValue + 1)
			: console.log('No hay stock');
	};
	const substract = () => {
		counterValue > 0
			? setCounterValue(counterValue - 1)
			: console.log('El número debe ser mayor a cero');
	};

	console.log(img);
	return (
		<article className='item'>
			<div className='item-img-container'>
				<img className='item-img' src={img} alt={name} />
				<div className='item-icon-container transition-all'>
					<div className='icon-container pointer'>
						<i className='icon-icon-cart'></i>
					</div>
					<div className='icon-container pointer'>
						<a href={plusLink}>
							<i className='icon-icon-search-plus'></i>
						</a>
					</div>
					<div className='icon-container pointer'>
						<i className='icon-icon-hart'></i>
					</div>
				</div>
			</div>
			<h3 className='item-title'>{name}</h3>
			<div className='color-icons'>
				<i className='icon-color icon-yellow'></i>
				<i className='icon-color icon-pink'></i>
				<i className='icon-color icon-violet'></i>
			</div>
			<div>
				<span className='item-price'>${(price * priceSale) / 100}</span>
				<span className='item-price promo-price'>${price}</span>
			</div>
			<ItemCount
				stock={stock}
				initial={counterValue}
				onAdd={sum}
				decrease={substract}
			/>
		</article>
	);
}

export default Item;
