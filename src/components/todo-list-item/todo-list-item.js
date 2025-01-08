import React from 'react';
import './todo-list-item.css';

const TodoListItem = ({ label }) => {
	return (
		<div className='view'>
			<input className='toggle' type='checkbox' />
			<label>
				<span className='description'>{label}</span>
				<span className='created'>created 5 minutes ago</span>
			</label>
		</div>
	);
};

export default TodoListItem;
