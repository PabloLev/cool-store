import "./HeadingBar.scss";

import CartWidget from "../CartWidget/CartWidget";
import { NavLink } from "react-router-dom";

function HeadingBar() {
	return (
		<div className='heading-bar'>
			<div className='heading-container'>
				<div className='heading-info'>
					<i className='icon-icon-mail'></i>
					<span className='heading-info-text'>info@hekto.com</span>
					<i className='icon-icon-phone'></i>
					<span className='heading-info-text'>(12345)67890</span>
				</div>
				<nav className='heading-nav'>
					<input
						className='headingbar-ckeckbox'
						type='checkbox'
						id='headingbar_toggle'
					/>

					<div className='social-icon-container flex-row align-items-center me-5'>
						<a
							href='https://es-la.facebook.com/'
							target='_blank'
							className='social-icon ms-2 me-2'
							rel='noreferrer'
						>
							<span className='icon-icon-facebook'></span>
						</a>
						<a
							href='https://www.instagram.com/?hl=es-la'
							target='_blank'
							className='social-icon ms-2 me-2'
							rel='noreferrer'
						>
							<span className='icon-icon-instagram'></span>
						</a>
						<a
							href='https://twitter.com/?lang=es'
							target='_blank'
							className='social-icon ms-2 me-2'
							rel='noreferrer'
						>
							<span className='icon-icon-twitter'></span>
						</a>
					</div>
					<NavLink exact to='/cart'>
						<CartWidget />
					</NavLink>
				</nav>
			</div>
		</div>
	);
}

export default HeadingBar;
