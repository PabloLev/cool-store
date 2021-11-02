import './Rating.scss';

function Rating({ stars }) {
	// let ratingObj = this.props.ratingObj;

	// let stars = [];

	// for (var i = 1; i <= 5; i++) {
	// 	let path = <i class='icon-icon-star star-yellow'></i>;

	// 	if (i > ratingObj.ratings) {
	// 		path = <i class='icon-icon-star'></i>;
	// 	}

	// 	stars.push(<Image style={styles.image} source={path} />);
	// }

	return (
		<div className='stars-container pt-1 pb-3'>
			<i className='icon-icon-star star-yellow'></i>
			<i className='icon-icon-star star-yellow'></i>
			<i className='icon-icon-star star-yellow'></i>
			<i className='icon-icon-star star-yellow'></i>
			<i className='icon-icon-star'></i>
		</div>
	);
}

export default Rating;
