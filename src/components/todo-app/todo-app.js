import React, { Component } from 'react';

import AppHeader from '../app-header';
import NewTodo from '../new-todo';
import TodoList from '../todo-list';
import Footer from '../footer';

import './todo-app.css';

export default class TodoApp extends Component {
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
		console.log(id);
	};

	render() {
		return (
			<div className='todoapp'>
				<AppHeader />
				<NewTodo />
				<TodoList todos={this.state.todoData} onDeleted={this.deleteItem} />
				<Footer status={this.state.statuses} />
			</div>
		);
	}
}
