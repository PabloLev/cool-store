import './Item.scss';
import ItemImg from '../../assets/img/items/item1.png';

function Item({ img, title, price, priceSale, plusLink }) {
	return (
		<article className="item">
			<div className="item-img-container">
				<img className="item-img" src={ItemImg} alt="" />
				<div className="item-icon-container transition-all">
					<div className="icon-container pointer">
						<i className="icon-cart"></i>
					</div>
					<div className="icon-container pointer">
						<i className="icon-search-plus"></i>
					</div>
					<div className="icon-container pointer">
						<i className="icon-hart"></i>
					</div>
				</div>
			</div>

			<h3 className="item-title">Vel elit euismod</h3>
			<div className="color-icons">
				<i className="icon-color icon-yellow"></i>
				<i className="icon-color icon-pink"></i>
				<i className="icon-color icon-violet"></i>
			</div>
			<div>
				<span className="item-price">$26.00</span>
				<span className="item-price promo-price">$26.00</span>
			</div>
		</article>
	);
}

export default Item;
