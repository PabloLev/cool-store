import CartWidget from '../CartWidget/CartWidget';
// import './HeadingBar.scss';
import { NavLink } from 'react-router-dom';

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
					<label
						className='headingbar-hamburger'
						htmlFor='headingbar_toggle'
					>
						<i className='icon-icon-chev-down ms-1'></i>
					</label>
					<ul className='heading-navbar'>
						<li className='heading-navbar-item'>
							<span className='navbar-link me-2 pointer'>
								English
								<i className='icon-icon-chev-down ms-1'></i>
							</span>
							<ul className='heading-dropdown'>
								<li>
									<a href='/#'>Español </a>
								</li>
								<li>
									<a href='/#'>Portugués</a>
								</li>
							</ul>
						</li>
						<li className='heading-navbar-item'>
							<span
								className='navbar-link me-2 pointer'
								href='/#'
							>
								USD
								<i className='icon-icon-chev-down ms-1'></i>
							</span>
							<ul className='heading-dropdown'>
								<li>
									<a href='/#'>ARG </a>
								</li>
								<li>
									<a href='/#'>UYU</a>
								</li>
							</ul>
						</li>
						<li className='heading-navbar-item'>
							<a className='navbar-link me-2' href='/#'>
								Login
								<i className='icon-icon-user ms-1'></i>
							</a>
						</li>
						<li className='heading-navbar-item'>
							<a className='navbar-link me-2' href='/#'>
								Wishlist
								<i className='icon-icon-hart ms-1'></i>
							</a>
						</li>
					</ul>
					<NavLink exact to='/cart'>
						<CartWidget numberOfProducts={2} />
					</NavLink>
				</nav>
			</div>
		</div>
	);
}

export default HeadingBar;
