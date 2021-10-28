import FooterLinks from '../FooterLinks';
import Logo from '../Logo/Logo';
import './Footer.scss';

function Footer() {
	return (
		<div className='footer'>
			<div className='footer-info-container'>
				<div>
					<Logo />
					<div className='search-container'>
						<form className='search' action=''>
							<input
								className='search-input'
								type='text'
								placeholder=''
								name='search'
							/>
							<button className='search-btn' type='submit'>
								{/* <i className="icon-search"></i> */}
								<i className='icon-icon-search'></i>
							</button>
						</form>
					</div>
				</div>

				<FooterLinks />
				<FooterLinks />
				<FooterLinks />
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
