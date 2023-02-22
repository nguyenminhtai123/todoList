import html from '../core.js';
import header from '../component/header.js';
import { connect } from '../store.js';
import todolist from '../component/todolist.js';
import footer from '../component/footer.js';

function App({ todos }) {
    return html`
    <section class="todoapp">
        ${header()}
        ${todos.length > 0 && todolist()}
        ${todos.length > 0 && footer()}
    </section>
    `
};

export default connect()(App);