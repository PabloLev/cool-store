import './CartWidget.scss';
import { useContext } from 'react';
import { CartContext } from '../../Context/cartContext';

function CartWidget() {
	const { cart } = useContext(CartContext);

	const totalItems = cart.reduce((total, item) => total + item.counter, 0);
	// const sumAll = (total, prevNum) => total + prevNum;
	// const totalItems = cart.map((item) => item.counter).reduce(sumAll, 0);
	return (
		<div className='cartWidget ms-3 pointer'>
			<i className='icon-icon-cart'></i>
			{totalItems !== 0 && (
				<sup className='cartWidget-number ms-1 text-white'>
					{totalItems}
				</sup>
			)}
		</div>
	);
}

export default CartWidget;
