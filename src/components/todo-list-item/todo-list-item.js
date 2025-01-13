import React, { Component } from 'react';
import './todo-list-item.css';

export default class TodoListItem extends Component {
	state = {
		completed: false,
		editing: false,
	};

	onCheckboxClick = () => {
		this.setState(({ completed }) => {
			return {
				completed: !completed,
			};
		});
	};

	editorClick = () => {
		this.setState({
			editing: true,
		});
	};

	render() {
		const { label, onDeleted } = this.props;
		const { completed, editing } = this.state;

		let classNames = '';

		if (completed) {
			classNames += ' completed';
		}

		if (editing) {
			classNames += ' editing';
		}

		return (
			<li key={TodoListItem.id} className={classNames}>
				<div className='view'>
					<input
						className='toggle'
						type='checkbox'
						onClick={this.onCheckboxClick}
					/>
					<label>
						<span className='description'>{label}</span>
						<span className='created'>created 5 minutes ago</span>
					</label>
					<button
						className='icon icon-edit'
						onClick={this.editorClick}
					></button>
					<button className='icon icon-destroy' onClick={onDeleted}></button>
				</div>
				<input type='text' className='edit' value='' />
			</li>
		);
	}
}
