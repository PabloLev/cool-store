import { Link } from "react-router-dom";

function Error404() {
	return (
		<section className='error404'>
			<h1 className='title'>Upps!! we have a problem...</h1>
			<image
				className='img'
				src='https://raw.githubusercontent.com/PabloLev/cool-store/4f0c3472d8421b7994b533fc4bb10e1593259ef5/src/assets/img/error404.svg'
			></image>
			<Link to='/'>
				<button className='button mt-6 mb-6'>Back to Home</button>
			</Link>
		</section>
	);
}

export default Error404;
