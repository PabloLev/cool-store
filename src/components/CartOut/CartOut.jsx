import "./CartOut.scss";
import ItemCount from "../ItemCount/ItemCount";
import { useContext } from "react";
import { CartContext } from "../../Context/cartContext";
function Cart({ item }) {
	const { removeItem } = useContext(CartContext);
	return (
		<article key={item.id} className='cartDetail-card'>
			<div className='cardImg-Title'>
				<div className='card-img-container'>
					<img
						className='img-primary'
						src={item.img}
						alt={item.name}
					/>
				</div>
				<h2 className='info-title ms-3'>{item.name}</h2>
			</div>

			<div className='price-container'>
				<div className='price'>
					<span className='item-price'>
						${item.price * (1 - item.discount / 100)}
					</span>

					<span className='item-price'>x{item.counter} =</span>
					<span className='item-price'>
						${item.price * (1 - item.discount / 100) * item.counter}
					</span>
				</div>
			</div>
		</article>
	);
}

export default Cart;
