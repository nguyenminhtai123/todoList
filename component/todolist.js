import html from '../core.js';
import todoItem from './todoitem.js';
import { connect } from '../store.js';

function todolist({ todos }) {
    return html`
            <section class="main">
				<input id="toggle-all" class="toggle-all" type="checkbox">
				<label for="toggle-all">Mark all as complete</label>
				<ul class="todo-list">
                    ${todos.map(todo => todoItem({todo}))}
				</ul>
			</section>
            `
};

export default connect()(todolist);