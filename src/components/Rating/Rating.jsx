import "./Rating.scss";

function Rating({ stars }) {
	const handleStars = (stars) => {
		switch (stars) {
			case 1:
				return (
					<>
						<i className='icon-icon-star star-yellow'></i>
						<i className='icon-icon-star'></i>
						<i className='icon-icon-star'></i>
						<i className='icon-icon-star'></i>
						<i className='icon-icon-star'></i>
					</>
				);

			case 2:
				return (
					<>
						<i className='icon-icon-star star-yellow'></i>
						<i className='icon-icon-star star-yellow'></i>
						<i className='icon-icon-star'></i>
						<i className='icon-icon-star'></i>
						<i className='icon-icon-star'></i>
					</>
				);

			case 3:
				return (
					<>
						<i className='icon-icon-star star-yellow'></i>
						<i className='icon-icon-star star-yellow'></i>
						<i className='icon-icon-star star-yellow'></i>
						<i className='icon-icon-star'></i>
						<i className='icon-icon-star'></i>
					</>
				);

			case 4:
				return (
					<>
						<i className='icon-icon-star star-yellow'></i>
						<i className='icon-icon-star star-yellow'></i>
						<i className='icon-icon-star star-yellow'></i>
						<i className='icon-icon-star star-yellow'></i>
						<i className='icon-icon-star'></i>
					</>
				);

			case 5:
				return (
					<>
						<i className='icon-icon-star star-yellow'></i>
						<i className='icon-icon-star star-yellow'></i>
						<i className='icon-icon-star star-yellow'></i>
						<i className='icon-icon-star star-yellow'></i>
						<i className='icon-icon-star star-yellow'></i>
					</>
				);

			default:
				return (
					<>
						<i className='icon-icon-star'></i>
						<i className='icon-icon-star'></i>
						<i className='icon-icon-star'></i>
						<i className='icon-icon-star'></i>
						<i className='icon-icon-star'></i>
					</>
				);
		}
	};

	return (
		<div className='stars-container pt-1 pb-3'>{handleStars(stars)}</div>
	);
}

export default Rating;
