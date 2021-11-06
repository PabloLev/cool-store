import './FooterLinks.scss';
import { Link } from 'react-router-dom';

function Footer({ title, linkList }) {
	return (
		<div className='footer-links-container'>
			<h5 className='footer-links-title'>{title}</h5>
			{linkList &&
				linkList.map((linkName) => (
					<Link
						to={linkName.url}
						className='footer-link'
						key={linkName.titulo}
					>
						<span className='link-text'>{linkName.titulo}</span>
					</Link>
				))}
		</div>
	);
}

export default Footer;
