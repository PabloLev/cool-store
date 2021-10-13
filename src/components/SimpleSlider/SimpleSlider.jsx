import React, { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import promotional from '../../assets/img/promotional.jpg';
import './SimpleSlider.scss';

function SampleNextArrow(props) {
	const { className, style, onClick } = props;
	return <div className={className} style={{ ...style, display: 'block', background: 'red', right: '50px' }} onClick={onClick} />;
}
function SamplePrevArrow(props) {
	const { className, style, onClick } = props;
	return <div className={className} style={{ ...style, display: 'block', background: 'green' }} onClick={onClick} />;
}

export default class SimpleSlider extends Component {
	render() {
		const settings = {
			dots: true,
			infinite: true,
			speed: 500,
			slidesToShow: 1,
			slidesToScroll: 1,
			nextArrow: <SampleNextArrow />,
			prevArrow: <SamplePrevArrow />,
		};
		return (
			<div>
				<Slider {...settings}>
					<div>
						<img src={promotional} alt="" />
					</div>
					<div>
						<img src={promotional} alt="" />
					</div>
					<div>
						<img src={promotional} alt="" />
					</div>
				</Slider>
			</div>
		);
	}
}
