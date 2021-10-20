import './scss/App.scss';

import Header from './components/Header';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Hero from './components/Hero/Hero';

function App() {
	return (
		<>
			<Header />
			<Hero />
			<main className="main-container">
				<ItemListContainer gretting="Productos" />
			</main>
		</>
	);
}

export default App;
