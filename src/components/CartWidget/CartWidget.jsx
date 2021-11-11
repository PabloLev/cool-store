import './CartWidget.scss';
import { useContext } from 'react';
import { CartContext } from '../../Context/cartContext';

function CartWidget() {
	const { cart } = useContext(CartContext);
	return (
		<div className='cartWidget ms-3 pointer'>
			<i className='icon-icon-cart'></i>
			<sup className='cartWidget-number ms-1 text-withe'>
				{cart.length}
			</sup>
		</div>
	);
}

export default CartWidget;
