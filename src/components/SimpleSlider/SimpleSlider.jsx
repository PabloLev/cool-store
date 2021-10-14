import React, { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import promo1 from '../../assets/img/promo/promo1.png';
import promo2 from '../../assets/img/promo/promo2.png';
import promo3 from '../../assets/img/promo/promo3.png';
import './SimpleSlider.scss';
import Slide from '../Slide/Slide';

function SampleNextArrow(props) {
	const { className, onClick } = props;
	return <div className={className} onClick={onClick} />;
}
function SamplePrevArrow(props) {
	const { className, onClick } = props;
	return <div className={className} onClick={onClick} />;
}

export default class SimpleSlider extends Component {
	render() {
		const settings = {
			dots: true,
			infinite: true,
			speed: 500,
			slidesToShow: 1,
			slidesToScroll: 1,
			fade: true,
			autoplay: true,
			pauseOnFocus: false,
			centerPadding: '150px',
			nextArrow: <SampleNextArrow />,
			prevArrow: <SamplePrevArrow />,
		};
		return (
			<div>
				<Slider {...settings}>
					<Slide
						infoTitle="Mauris at orci non vulputate diam tincidunt nec"
						infoSubtitle="Best Furniture For Your Castle...."
						infoDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo."
						promoImg={promo1}
						promoData="50% off"
					/>
					<Slide
						infoTitle="Unique Features Of leatest & Trending Poducts"
						infoSubtitle="Best Furniture For Your Castle...."
						infoDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo."
						promoImg={promo2}
						promoData="30% off"
					/>
					<Slide
						infoTitle="New Furniture Collection Trends in 2021"
						infoSubtitle="Best Furniture For Your Castle...."
						infoDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo."
						promoImg={promo3}
						promoData="70% off"
					/>
				</Slider>
			</div>
		);
	}
}
