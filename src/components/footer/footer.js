import React from 'react';
import './footer.css';

const Footer = ({ doneCount, filter, onFilterChange, clearCompleted }) => {
	const buttons = [
		{ name: 'all', label: 'All' },
		{ name: 'active', label: 'Active' },
		{ name: 'completed', label: 'Completed' },
	];

	const statuses = buttons.map(({ name, label }) => {
		const isActive = filter === name;
		const classNames = isActive ? 'selected' : '';
		return (
			<li key={name}>
				<button className={classNames} onClick={() => onFilterChange(name)}>
					{label}
				</button>
			</li>
		);
	});

	return (
		<footer className='footer'>
			<span className='todo-count'>{doneCount} items left</span>
			<ul className='filters'>{statuses}</ul>
			<button className='clear-completed' onClick={clearCompleted}>
				Clear completed
			</button>
		</footer>
	);
};

export default Footer;
