import './Item.scss';

function Item({ img, title, price, priceSale, plusLink }) {
	return (
		<article className="item">
			<div className="item-img-container">
				<img className="item-img" src={img} alt="" />
				<div className="item-icon-container transition-all">
					<div className="icon-container pointer">
						<i className="icon-icon-cart"></i>
					</div>
					<div className="icon-container pointer">
						<a href={plusLink}>
							<i className="icon-icon-search-plus"></i>
						</a>
					</div>
					<div className="icon-container pointer">
						<i className="icon-icon-hart"></i>
					</div>
				</div>
			</div>
			<h3 className="item-title">{title}</h3>
			<div className="color-icons">
				<i className="icon-color icon-yellow"></i>
				<i className="icon-color icon-pink"></i>
				<i className="icon-color icon-violet"></i>
			</div>
			<div>
				<span className="item-price">{price}</span>
				<span className="item-price promo-price">{priceSale}</span>
			</div>
		</article>
	);
}

export default Item;
