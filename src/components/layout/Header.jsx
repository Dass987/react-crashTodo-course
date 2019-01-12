import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
	return (
		<header className="my-5">
			<h1>TodoList</h1>
			<Link to="/">Home</Link> | <Link to="/about">About</Link>
		</header>
	)
}

/*const headerStyle = {
	backgroundColor: '#333',
	color: '#fff',
	textAlign: 'center',
	padding: '10px'
};*/

/*const linkStyle = {
	color: '#fff',
	textDecoration: 'none'
}*/

export default Header;