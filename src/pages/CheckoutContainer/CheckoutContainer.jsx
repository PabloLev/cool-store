import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../Context/cartContext";
import CartOut from "../../components/CartOut/CartOut";
import BuyerForm from "../../components/BuyerForm";
function CheckoutContainer() {
	const { cart } = useContext(CartContext);

	const totalToPay = cart.reduce((total, item) => {
		return total + item.price * (1 - item.discount / 100) * item.counter;
	}, 0);

	return (
		<section className='cartOutDetail'>
			<h1 className='title'>Check Out</h1>
			{cart.length ? (
				cart.map((item) => <CartOut key={item.id} item={item} />)
			) : (
				<>
					<h1>No Products</h1>
					<h2>Add some, go to the shop!!!</h2>
				</>
			)}

			{cart.length ? (
				<>
					<h1 className='to-right'>Total = ${totalToPay}</h1>
					<Link
						to='/cart'
						className='button mt-6 mb-6 btn-link to-right'
					>
						Modify
					</Link>
					<h2 className='finish-text'>
						Please complete the form to finish your purchase.
					</h2>

					<BuyerForm finalPurchase={cart} total={totalToPay} />

					<div className='full-width flex-end ms-6 me-6'>
						<button
							type='submit'
							form='buyerForm'
							className='button mt-6 mb-6'
						>
							Finish
						</button>
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

export default CheckoutContainer;
