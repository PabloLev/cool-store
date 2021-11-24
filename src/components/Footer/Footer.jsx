import FooterLinks from "../FooterLinks";
import Logo from "../Logo/Logo";
import "./Footer.scss";

function Footer() {
	return (
		<div className='footer'>
			<div className='footer-info-container '>
				<div>
					<Logo />
					{/* <div className='search-container'>
						<form className='search' action=''>
							<input
								className='search-input'
								type='text'
								placeholder=''
								name='search'
							/>
							<button className='search-btn' type='submit'>
								
								<i className='icon-icon-search'></i>
							</button>
						</form>
					</div> */}
				</div>

				<FooterLinks
					title='Categories'
					linkList={[
						{ titulo: "All", url: "/shop" },
						{ titulo: "Tech", url: "/category/tech" },
						{ titulo: "House", url: "/category/house" },
						{ titulo: "test", url: "/category/test" },
					]}
				/>
				<FooterLinks
					title='Customer Care'
					linkList={[
						{ titulo: "My Account", url: "/" },
						{ titulo: "Discount", url: "/" },
						{ titulo: "Returns", url: "/" },
						{ titulo: "Order Tracking", url: "/" },
					]}
				/>
				<FooterLinks
					title='Pages'
					linkList={[
						{ titulo: "Blog", url: "/" },
						{ titulo: "Browse the Shop", url: "/" },
						{ titulo: "Category", url: "/" },
						{ titulo: "Pre-Built Pages", url: "/" },
						{ titulo: "Visual Composer Elements", url: "/" },
						{ titulo: "WooCommerce Pages", url: "/" },
					]}
				/>
			</div>
			<div className='social'>
				<div className='footer-social'>
					<span className='footer-copyright'>
						©Webecy - All Rights Reserved
					</span>
					<div className='social-icon-container'>
						<div className='social-icon'>
							<i className='icon-icon-facebook'></i>
						</div>
						<div className='social-icon'>
							<i className='icon-icon-instagram'></i>
						</div>
						<div className='social-icon'>
							<i className='icon-icon-twitter'></i>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Footer;
