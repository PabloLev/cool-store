import "./Header.scss";
import HeadingBar from "../HeadingBar/HeadingBar";
import Navbar from "../Navbar/Navbar";

function Header() {
	return (
		<header className='header'>
			<HeadingBar />
			<Navbar />
		</header>
	);
}

export default Header;
