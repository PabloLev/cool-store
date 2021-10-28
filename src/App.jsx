import './scss/App.scss';

import Header from './components/Header';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Hero from './components/Hero/Hero';
import Footer from './components/Footer/Footer';

function App() {
	return (
		<>
			<Header />
			<Hero />
			<main className='main-container'>
				<ItemListContainer gretting='Productos' />
			</main>
			<Footer />
		</>
	);
}

export default App;
