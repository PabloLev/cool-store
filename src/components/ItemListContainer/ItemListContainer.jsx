import Item from '../Item/Item';
import './ItemListContainer.scss';
import ItemImg1 from '../../assets/img/items/item1.png';
import ItemImg2 from '../../assets/img/items/item2.png';
import ItemImg3 from '../../assets/img/items/item3.png';
import ItemImg4 from '../../assets/img/items/item4.png';
import ItemImg5 from '../../assets/img/items/item5.png';
import ItemImg6 from '../../assets/img/items/item6.png';
import ItemImg7 from '../../assets/img/items/item7.png';
import ItemImg8 from '../../assets/img/items/item8.png';
import ItemImg9 from '../../assets/img/items/item9.png';
import ItemImg10 from '../../assets/img/items/item10.png';
import ItemImg11 from '../../assets/img/items/item11.png';
import ItemImg12 from '../../assets/img/items/item12.png';

function ItemListContainer({ gretting }) {
	return (
		<section className="itemListContainer">
			<Item img={ItemImg1} title="Vel elit euismod" price="$26.00" priceSale="$42.00" plusLink="/#" />
			<Item img={ItemImg2} title="Ultricies condim imperdiet" price="$26.00" priceSale="$42.00" plusLink="/#" />
			<Item img={ItemImg3} title="Vitae suspendisse sed" price="$26.00" priceSale="$42.00" plusLink="/#" />
			<Item img={ItemImg4} title="Sed at fermentum" price="$26.00" priceSale="$42.00" plusLink="/#" />
			<Item img={ItemImg5} title="Fusce pellentesque at" price="$26.00" priceSale="$42.00" plusLink="/#" />
			<Item img={ItemImg6} title="Vestibulum magna laoreet" price="$26.00" priceSale="$42.00" plusLink="/#" />
			<Item img={ItemImg7} title="Sollicitudin amet orci" price="$26.00" priceSale="$42.00" plusLink="/#" />
			<Item img={ItemImg8} title="Ultrices mauris sit" price="$26.00" priceSale="$42.00" plusLink="/#" />
			<Item img={ItemImg9} title="Pellentesque condimentum ac" price="$26.00" priceSale="$42.00" plusLink="/#" />
			<Item img={ItemImg10} title="Cras scelerisque velit" price="$26.00" priceSale="$42.00" plusLink="/#" />
			<Item img={ItemImg11} title="Lectus vulputate faucibus" price="$26.00" priceSale="$42.00" plusLink="/#" />
			<Item img={ItemImg12} title="Purus risus, ut" price="$26.00" priceSale="$42.00" plusLink="/#" />
		</section>
	);
}

export default ItemListContainer;
