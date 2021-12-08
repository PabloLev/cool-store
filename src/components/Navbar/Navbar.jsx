import Logo from "../Logo/Logo";
import "./Navbar.scss";
import { NavLink } from "react-router-dom";

function Navbar() {
	return (
		<nav className='navbar'>
			<div className='navbar-container'>
				<div className='navigation'>
					<Logo />
					<ul className='nav-links'>
						<input
							className='menu-ckeckbox'
							type='checkbox'
							id='checkbox_toggle'
						/>
						<label htmlFor='checkbox_toggle' className='hamburger'>
							&#9776;
						</label>
						<div className='menu'>
							<li className='nav-item'>
								<NavLink activeClassName='active' exact to='/'>
									Home
								</NavLink>
							</li>
							<li className='nav-item'>
								<NavLink
									activeClassName='active'
									exact
									to='/shop'
								>
									Shop
								</NavLink>
							</li>
						</div>
					</ul>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
