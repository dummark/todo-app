import React, { useState } from 'react';

import './new-todo.css';

const NewTodo = ({ onItemAdded }) => {
	const [value, setValue] = useState('');

	const addTask = e => {
		if (e.key === 'Enter') {
			onItemAdded(value);
			setValue('');
		}
	};

	return (
		<input
			className='new-todo'
			placeholder={'What needs to be done?'}
			autoFocus=''
			value={value}
			onChange={e => setValue(e.target.value)}
			onKeyDown={addTask}
		/>
	);
};

export default NewTodo;
