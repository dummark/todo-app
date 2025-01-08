import React from 'react';

import './new-todo.css';

const NewTodo = () => {
	const searchText = 'What needs to be done?';
	return <input className='new-todo' placeholder={searchText} autoFocus='' />;
};

export default NewTodo;
