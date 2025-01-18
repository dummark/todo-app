import React, { Component } from 'react';

import AppHeader from '../app-header';
import NewTodo from '../new-todo';
import TodoList from '../todo-list';
import Footer from '../footer';

import './todo-app.css';

export default class TodoApp extends Component {
	maxId = 100;

	state = {
		todoData: [
			{ label: 'drink', id: 1 },
			{ label: 'eat', id: 2 },
			{ label: 'study', id: 3 },
		],
		statuses: [
			{ status: 'All', id: 'al' },
			{ status: 'Active', id: 'ac' },
			{ status: 'Completed', id: 'co' },
		],
	};

	deleteItem = id => {
		this.setState(({ todoData }) => {
			const idx = todoData.findIndex(el => el.id === id);
			const newArray = todoData.toSpliced(idx, 1);
			return {
				todoData: newArray,
			};
		});
	};

	addItem = text => {
		const newItem = { label: text, id: this.maxId++ };

		this.setState(({ todoData }) => {
			const newArr = [...todoData, newItem];

			return { todoData: newArr };
		});
	};

	render() {
		return (
			<div className='todoapp'>
				<AppHeader />
				<NewTodo onItemAdded={this.addItem} />
				<TodoList todos={this.state.todoData} onDeleted={this.deleteItem} />
				<Footer status={this.state.statuses} />
			</div>
		);
	}
}
