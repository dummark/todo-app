import React from 'react';

import './footer.css';

const Footer = ({ status }) => {
	const elements = status.map(item => {
		const { id, ...itemProps } = item;

		return (
			<li>
				<button className=''>{itemProps.status}</button>
			</li>
		);
	});

	return (
		<footer className='footer'>
			<span className='todo-count'>1 items left</span>
			<ul className='filters'>{elements}</ul>
			<button className='clear-completed'>Clear completed</button>
		</footer>
	);
};

export default Footer;