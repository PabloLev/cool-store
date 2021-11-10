import './ItemDetail.scss';
import ItemCount from '../ItemCount/ItemCount';
import Rating from '../Rating/Rating';
import { Link } from 'react-router-dom';

function ItemDetail({
	img,
	category,
	name,
	description,
	price,
	priceSale,
	stock,
	onAdd,
	showCount,
	itemsInCart,
}) {
	return (
		<section className='itemDetail'>
			<article className='itemDetail-card'>
				<div className='card-img-container'>
					<img className='img-primary' src={img} alt={name} />
				</div>
				<div className='card-info'>
					<h2 className='info-title'>{name}</h2>
					<Rating stars={4} />
					<div>
						<span className='item-price'>
							${(price * priceSale) / 100}
						</span>
						<span className='item-price promo-price'>${price}</span>
					</div>
					<p className='info-description'></p>
					<div>
						<span>Add to cart</span>
						<i className='icon-icon-hart text-primary'></i>
					</div>
					<div className='info-categories'>
						<span>Categories: {category}</span>
					</div>
					<div className='info-Tags'>
						<span>Tags:</span>
					</div>
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
					{!showCount && (
						<ItemCount
							stock={stock}
							initial={1}
							onAdd={onAdd}
							showCount={showCount}
						/>
					)}
					{showCount && (
						<Link to='/cart'>
							<button>
								Ir A Carrito con {itemsInCart} items
							</button>
						</Link>
					)}
				</div>
			</article>
			<div className='itemDetail-description'>
				<h3 className='description-title'>Varius tempor</h3>
				<p>{description}</p>
			</div>
			<div className='itemDetail-related'></div>

			<Link to={`/`}>
				<button>back</button>
			</Link>
		</section>
	);
}

export default ItemDetail;
