import AppHeader from '../app-header';
import NewTodo from '../new-todo';
import TodoList from '../todo-list';
import Footer from '../footer';

import './todo-app.css';

const TodoApp = () => {
	const statuses = [
		{ status: 'All', id: 'al' },
		{ status: 'Active', id: 'ac' },
		{ status: 'Completed', id: 'co' },
	];

	const todoData = [
		{ label: 'drink', id: 1 },
		{ label: 'eat', id: 2 },
		{ label: 'study', id: 3 },
	];

	return (
		<div className='todoapp'>
			<AppHeader />
			<NewTodo />
			<TodoList todos={todoData} />
			<Footer status={statuses} />
		</div>
	);
};

export default TodoApp;
