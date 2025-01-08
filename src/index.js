import { React } from 'react';
import { createRoot } from 'react-dom/client';

const el = (
	<div>
		<h1>My Todo List</h1>
		<input placeholder='search' />
		<ul>
			<li>Learn React</li>
			<li>Build Awesome App</li>
		</ul>
	</div>
);

createRoot(document.getElementById('root')).render(el);
