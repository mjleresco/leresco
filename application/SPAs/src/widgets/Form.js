import Widget from './widget.js';

class Form extends Widget {
  constructor(options) {
    super({
      ...options,
      template: (data) => `
        <form class="jsap-widget-form" id="${(link unavailable)}">
          ${data.fields.map((field) => `
            <div class="jsap-widget-form-field">
              <label for="${(link unavailable)}">${field.label}</label>
              <input type="${field.type}" id="${(link unavailable)}" name="${field.name}" value="${field.value}">
            </div>
          `).join('')}
          <button class="jsap-widget-form-submit" type="submit">${data.submitText}</button>
        </form>
      `,
      styles: `
        .jsap-widget-form {
          padding: 20px;
          border: 1px solid #ccc;
          border-radius: 5px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        .jsap-widget-form-field {
          margin-bottom: 20px;
        }
        .jsap-widget-form-field label {
          display: block;
          margin-bottom: 10px;
        }
        .jsap-widget-form-submit {
          background-color: #337ab7;
          color: #fff;
          padding: 10px 20px;
          border: none;
          border-radius: 5px;
          cursor: pointer;
        }
        .jsap-widget-form-submit:hover {
          background-color: #23527c;
        }
      `,
    });
  }
}

export default Form;

/*
import Form from './form.js';

const form = new Form({
  id: 'my-form',
  data: {
    fields: [
      {
        id: 'name',
        label: 'Name',
        type: 'text',
        name: 'name',
        value: '',
      },
      {
        id: 'email',
        label: 'Email',
        type: 'email',
        name: 'email',
        value: '',
      },
    ],
    submitText: 'Submit',
  },
});

*/