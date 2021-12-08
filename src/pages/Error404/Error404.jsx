import { Link } from "react-router-dom";

function Error404() {
	return (
		<section className='error404'>
			<h1 className='title'>Upps!! we have a problem...</h1>

			<Link to='/'>
				<button className='button mt-6 mb-6'>Back to Home</button>
			</Link>
		</section>
	);
}

export default Error404;
