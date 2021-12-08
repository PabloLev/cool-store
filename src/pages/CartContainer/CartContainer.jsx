import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../Context/cartContext";
import Cart from "../../components/Cart/Cart";
function CartContainer() {
	const { cart, emptyCart } = useContext(CartContext);

	const totalToPay = cart.reduce((total, item) => {
		return total + item.price * (1 - item.discount / 100) * item.counter;
	}, 0);

	return (
		<section className='cartDetail'>
			<h1 className='title'>Cart</h1>
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
					<button
						onClick={() => emptyCart()}
						className='button mt-6 mb-6 btn-link to-right'
					>
						Remove All
					</button>
					<h1 className='to-right'>Total = ${totalToPay}</h1>
					<div className='full-width flex-space-between ms-6 me-6'>
						<Link to='/shop' className='button mt-6 mb-6 btn-link'>
							Continue shopping
						</Link>
						<Link to='/checkout' className='button mt-6 mb-6'>
							Check Out
						</Link>
					</div>
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
