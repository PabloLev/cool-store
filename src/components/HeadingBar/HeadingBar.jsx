import './HeadingBar.scss';

function HeadingBar() {
	return (
		<div className="heading-bar">
			<div className="heading-container">
				<div className="heading-info">
					<i className="icon-email"></i>
					<span className="heading-info-text">mhhasanul@gmail.com</span>
					<i className="icon-phone"></i>
					<span className="heading-info-text">(12345)67890</span>
				</div>
				<nav className="heading-nav">
					{/* <input type="checkbox" id="checkbox_toggle" />
					<label htmlFor="checkbox_toggle" className="hamburger">
						&#9776;
					</label> */}
					<ul className="heading-navbar">
						<li className="heading-navbar-item">
							<a className="navbar-link me-2" aria-current="page" href="/#">
								English
								<i className="icon-chevron-down ms-1"></i>
							</a>

							<ul className="heading-dropdown">
								<li>
									<a href="/#">Español </a>
								</li>
								<li>
									<a href="/#">Portugués</a>
								</li>
							</ul>
						</li>
						<li className="heading-navbar-item">
							<a className="navbar-link me-2" href="/#">
								USD
								<i className="icon-chevron-down ms-1"></i>
							</a>
							<ul className="heading-dropdown">
								<li>
									<a href="/#">ARG </a>
								</li>
								<li>
									<a href="/#">UYU</a>
								</li>
							</ul>
						</li>
						<li className="heading-navbar-item">
							<a className="navbar-link me-2" href="/#">
								Login
								<i className="icon-user ms-1"></i>
							</a>
						</li>
						<li className="heading-navbar-item">
							<a className="navbar-link me-2" href="/#">
								Wishlist
								<i className="icon-hart ms-1"></i>
							</a>
						</li>
						<i className="icon-cart ms-3 pointer"></i>
					</ul>
				</nav>
			</div>
		</div>
	);
}

export default HeadingBar;
