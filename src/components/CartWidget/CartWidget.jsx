import './CartWidget.scss';

function CartWidget() {
	return (
		<div className="cartWidget ms-3 pointer">
			<i className="icon-cart"></i>
			<sup className="cartWidget-number ms-1 text-withe">2</sup>
		</div>
	);
}

export default CartWidget;
