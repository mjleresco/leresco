import Widget from './widget.js';

class ToDoList extends Widget {
  constructor(options) {
    super({
      ...options,
      template: (data) => `
        <div class="jsap-widget-to-do-list">
          <h2>${data.title}</h2>
          <ul>
            ${data.items.map((item) => `
              <li>
                <input type="checkbox" ${item.completed ? 'checked' : ''}>
                <span ${item.completed ? 'style="text-decoration: line-through;"' : ''}>${item.text}</span>
              </li>
            `).join('')}
          </ul>
          <form>
            <input type="text" placeholder="Add new item...">
            <button type="submit">Add</button>
          </form>
        </div>
      `,
      styles: `
        .jsap-widget-to-do-list {
          padding: 20px;
          border: 1px solid #ccc;
          border-radius: 5px;
        }
        .jsap-widget-to-do-list ul {
          list-style: none;
          margin: 0;
          padding: 0;
        }
        .jsap-widget-to-do-list li {
          margin-bottom: 10px;
        }
        .jsap-widget-to-do-list input[type="checkbox"] {
          margin-right: 10px;
        }
      `,
    });
  }
}

export default ToDoList;

/*
import ToDoList from './to-do-list.js';

const toDoList = new ToDoList({
  id: 'my-to-do-list',
  data: {
    title: 'My To-Do List',
    items: [
      {
        text: 'Buy milk',
        completed: false,
      },
      {
        text: 'Walk the dog',
        completed: true,
      },
      {
        text: 'Do laundry',
        completed: false,
      },
    ],
  },
});

*/