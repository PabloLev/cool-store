import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../../Context/cartContext';
import Cart from '../../components/Cart/Cart';
function CartContainer() {
	const { cart, emptyCart } = useContext(CartContext);

	const totalToPay = cart.reduce((total, item) => {
		return total + item.price * (1 - item.discount / 100) * item.counter;
	}, 0);
	console.log('Cart en container', cart);
	return (
		<section className='cartDetail'>
			{cart.length ? (
				cart.map((item) => <Cart key={item.id} item={item} />)
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
