import "./Logo.scss";
import { Link } from "react-router-dom";

function Logo() {
	return (
		<div className='logo'>
			<Link className='pointer' to='/'>
				Hekstore
			</Link>
		</div>
	);
}

export default Logo;
