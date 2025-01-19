import React, { useState } from 'react';

import AppHeader from '../app-header';
import NewTodo from '../new-todo';
import TodoList from '../todo-list';
import Footer from '../footer';

import './todo-app.css';

const TodoApp = () => {
	const [todoData, setTodoData] = useState([
		{ label: 'drink', id: 1, completed: false, date: new Date() },
		{ label: 'eat', id: 2, completed: false, date: new Date() },
		{ label: 'study', id: 3, completed: false, date: new Date() },
	]);

	const [filter, setFilter] = useState('all');

	const doneCount = todoData.filter(el => !el.completed).length;

	const deleteItem = id => {
		setTodoData(prevTodoData => {
			const newTodoData = prevTodoData.filter(item => item.id !== id);
			return newTodoData;
		});
	};

	const addItem = text => {
		const newItem = {
			label: text,
			id: new Date(),
			completed: false,
			date: new Date(),
		};
		setTodoData(prevTodoData => [...prevTodoData, newItem]);
	};

	const onToggleDone = id => {
		setTodoData(prevTodoData =>
			prevTodoData.map(todo =>
				todo.id === id ? { ...todo, completed: !todo.completed } : todo
			)
		);
	};

	const onUpdate = (id, newLabel) => {
		setTodoData(prevTodoData => {
			return prevTodoData.map(todo =>
				todo.id === id ? { ...todo, label: newLabel } : todo
			);
		});
	};

	const filteredTodos = todoData.filter(item => {
		switch (filter) {
			case 'active':
				return !item.completed;
			case 'completed':
				return item.completed;
			default:
				return true;
		}
	});

	const clearCompleted = () => {
		setTodoData(prevTodoData => {
			const newTodoData = prevTodoData.filter(el => !el.completed);
			return newTodoData;
		});
	};

	const changeFilter = newFilter => setFilter(newFilter);

	return (
		<div className='todoapp'>
			<AppHeader />
			<NewTodo onItemAdded={addItem} />
			<TodoList
				todos={filteredTodos}
				onDeleted={deleteItem}
				onToggleDone={onToggleDone}
				onUpdate={onUpdate}
			/>
			<Footer
				doneCount={doneCount}
				filter={filter}
				onFilterChange={changeFilter}
				clearCompleted={clearCompleted}
			/>
		</div>
	);
};

export default TodoApp;
