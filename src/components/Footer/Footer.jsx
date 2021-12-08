import FooterLinks from "../FooterLinks";
import Logo from "../Logo/Logo";
import "./Footer.scss";

function Footer() {
	return (
		<div className='footer'>
			<div className='footer-info-container '>
				<div>
					<Logo />
				</div>

				<FooterLinks
					title='Categories'
					linkList={[
						{ titulo: "All", url: "/shop" },
						{ titulo: "Tech", url: "/category/tech" },
						{ titulo: "House", url: "/category/house" },
					]}
				/>
				<FooterLinks
					title='Customer Care'
					linkList={[
						{ titulo: "My Account", url: "/" },
						{ titulo: "Discount", url: "/" },
						{ titulo: "Order Tracking", url: "/" },
					]}
				/>
				<FooterLinks
					title='Pages'
					linkList={[
						{ titulo: "Browse the Shop", url: "/shop" },
						{ titulo: "Category", url: "/shop" },
					]}
				/>
			</div>
			<div className='social'>
				<div className='footer-social'>
					<span className='footer-copyright'>
						©Pablo Levin - All Rights Reserved
					</span>
				</div>
			</div>
		</div>
	);
}

export default Footer;
