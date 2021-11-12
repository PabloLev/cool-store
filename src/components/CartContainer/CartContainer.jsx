import './CartContainer.scss';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../../Context/cartContext';

function CartContainer() {
	const { cart, removeItem, emptyCart } = useContext(CartContext);

	const totalToPay = cart.reduce(
		(total, item) =>
			total + item.price * (1 - item.discount / 100) * item.counter,
		0
	);
	return (
		<section className='cartDetail'>
			{cart.length ? (
				cart.map((item) => (
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
							<div>
								<span className='item-price'>
									${item.price * (1 - item.discount / 100)}
								</span>
								<span className='item-price'>
									x{item.counter}{' '}
								</span>
								<span className='item-price'>
									$
									{item.price *
										(1 - item.discount / 100) *
										item.counter}
								</span>
							</div>

							<div
								onClick={() => removeItem(item.id)}
								className='close'
								to='/shop'
							>
								<i className='icon-icon-cross'></i>
							</div>
						</div>
					</article>
				))
			) : (
				<>
					<h1>No Products</h1>
					<h2>Add some, go to the shop!!!</h2>
				</>
			)}
			{cart.length ? (
				<>
					<h1>TOTAL A PAGAR ${totalToPay}</h1>
					<button
						onClick={() => emptyCart()}
						className='button mt-6 mb-6'
					>
						Remove All
					</button>
				</>
			) : (
				<Link to='/shop'>
					<button className='button mt-6 mb-6'>Shop</button>
				</Link>
			)}
		</section>
	);
}

export default CartContainer;
