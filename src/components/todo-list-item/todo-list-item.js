import React, { useState } from 'react';
import './todo-list-item.css';
import { formatDistanceToNowStrict } from 'date-fns';

const TodoListItem = ({
	id,
	label,
	date,
	completed,
	onDeleted,
	onToggleDone,
	onUpdate,
}) => {
	const [editing, setEditing] = useState(false);
	const [editValue, setEditValue] = useState(label);

	const editorClick = () => {
		setEditing(true);
	};

	const handleEditChange = e => {
		setEditValue(e.target.value);
	};

	const handleEditSubmit = e => {
		if (e.key === 'Enter') {
			onUpdate(id, editValue);
			setEditing(false);
		}
	};

	const classNames = ['todo-list-item'];
	if (completed) classNames.push('completed');
	if (editing) classNames.push('editing');

	const timeOfCreate = formatDistanceToNowStrict(date, {
		includeSeconds: true,
	});

	return (
		<li className={classNames.join(' ')}>
			<div className='view'>
				<input
					className='toggle'
					type='checkbox'
					checked={completed}
					onChange={onToggleDone}
				/>
				<label>
					<span className='description'>{editValue}</span>
					<span className='created'>created {timeOfCreate} ago</span>
				</label>
				<button className='icon icon-edit' onClick={editorClick}></button>
				<button className='icon icon-destroy' onClick={onDeleted}></button>
			</div>

			{editing && (
				<input
					type='text'
					className='edit'
					value={editValue}
					onChange={handleEditChange}
					onKeyDown={handleEditSubmit}
					onBlur={() => setEditing(false)}
				/>
			)}
		</li>
	);
};

export default TodoListItem;
