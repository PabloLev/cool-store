import './CartWidget.scss';

function CartWidget({ numberOfProducts }) {
	return (
		<div className="cartWidget ms-3 pointer">
			<i className="icon-icon-cart"></i>
			<sup className="cartWidget-number ms-1 text-withe">{numberOfProducts}</sup>
		</div>
	);
}

export default CartWidget;
