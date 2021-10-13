import './Slide.scss';
import promo1b from '../../assets/img/promo/promo1b.png';

function Slide({ infoTitle, infoSubtitle, infoDescription, promoImg, promoData }) {
	return (
		<div className="slide">
			<div className="slider-container">
				<div className="product-imgb">
					<img className="promo-imgb" src={promo1b} alt="" />
				</div>
				<div className="promo-info">
					<span className="promo-info-subtitle">{infoSubtitle}</span>
					<h2 className="promo-info-title">{infoTitle}</h2>
					<p className="promo-info-description">{infoDescription}</p>
					<button className="btn promo-btn">Shop Now</button>
				</div>
				<div className="product-img">
					<div className="cirecles">
						<div className="circle1"></div>
						<div className="circle2"></div>
					</div>

					<img className="promo-img" src={promoImg} alt="" />
					<div className="pomo-data">{promoData}</div>
				</div>
			</div>
		</div>
	);
}

export default Slide;
