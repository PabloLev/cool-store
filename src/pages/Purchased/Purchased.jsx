import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../Context/cartContext";

function Purchased() {
	const { theBuyer } = useContext(CartContext);
	console.log(theBuyer);
	return (
		<section className='flex-column align-items-center mt-6 mb-6'>
			<h1 className='mb-5'>{`Thanks for your purchase ${theBuyer.buyerName}`}</h1>
			<h2 className='mb-2'>This is your purchase ID: </h2>
			<h2 className='mb-3 text-secondary'>{theBuyer.id}</h2>
			<div className='purchased-image' />
			<Link to='/'>
				<button className='button mt-6 mb-6'>Back to Shop</button>
			</Link>
		</section>
	);
}

export default Purchased;
