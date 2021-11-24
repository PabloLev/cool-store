import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../Context/cartContext";
import CartOut from "../../components/CartOut/CartOut";
function CheckoutContainer() {
	const { cart } = useContext(CartContext);

	const totalToPay = cart.reduce((total, item) => {
		return total + item.price * (1 - item.discount / 100) * item.counter;
	}, 0);

	return (
		<section className='cartOutDetail'>
			<h1 className='title'>Check Out</h1>
			{cart.length ? (
				cart.map((item) => (
					<>
						<CartOut key={item.id} item={item} />
					</>
				))
			) : (
				<>
					<h1>No Products</h1>
					<h2>Add some, go to the shop!!!</h2>
				</>
			)}

			{cart.length ? (
				<>
					<h2 className='finish-text'>
						Please complete the form to finish your purchase.
					</h2>
					<form className='form-checkout' action=''>
						<input
							className='line-input half'
							type='text'
							placeholder='First Name'
						/>
						<input
							className='line-input half fix-margin'
							type='text'
							placeholder='Surname'
						/>

						<input
							className='line-input half'
							type='text'
							placeholder='City'
						/>
						<input
							className='line-input half fix-margin'
							type='number'
							placeholder='Zip code'
						/>
						<input
							className='line-input'
							type='text'
							placeholder='Adress'
						/>
					</form>
					<h1 className='to-right'>Total to pay = ${totalToPay}</h1>
					<div className='full-width flex-space-between ms-6 me-6'>
						<Link
							exact
							to='/cart'
							className='button mt-6 mb-6 btn-link'
						>
							Modify
						</Link>
						<Link exact to='/checkout' className='button mt-6 mb-6'>
							Finish
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

export default CheckoutContainer;
