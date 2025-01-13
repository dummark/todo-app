import React from 'react';

import TodoListItem from '../todo-list-item';
import './todo-list.css';

const TodoList = ({ todos }) => {
	const elements = todos.map(item => {
		const { id, ...itemProps } = item;

		return <TodoListItem {...itemProps} />;
	});

	return <ul className='todo-list'>{elements}</ul>;
};

export default TodoList;
