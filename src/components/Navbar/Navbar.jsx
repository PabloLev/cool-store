import './Navbar.scss';

function Navbar() {
	return (
		<nav className="navbar">
			<div className="navbar-container">
				<div className="navigation">
					{/* <!-- LOGO --> */}
					<div className="logo">
						<a className="pointer" href="/#">
							Hekto
						</a>
					</div>
					{/* <!-- NAVIGATION MENU --> */}
					<ul className="nav-links">
						<input className="menu-ckeckbox" type="checkbox" id="checkbox_toggle" />
						<label htmlFor="checkbox_toggle" className="hamburger">
							&#9776;
						</label>
						<div className="menu">
							<li className="nav-item">
								<a className="active" href="/#">
									Home
								</a>
							</li>
							<li className="nav-item">
								<a href="/#">Shop</a>
							</li>
							<li className="nav-item">
								<a href="/#">Contact</a>
							</li>
						</div>
					</ul>
				</div>
				<div className="search-container">
					<form className="search" action="/action_page.php">
						<input className="search-input" type="text" placeholder="" name="search" />
						<button className="search-btn" type="submit">
							{/* <i className="icon-search"></i> */}
							<i className="icon-icon-search"></i>
						</button>
					</form>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
