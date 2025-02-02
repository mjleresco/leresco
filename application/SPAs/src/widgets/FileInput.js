import Widget from './widget.js';

class FileInput extends Widget {
  constructor(options) {
    super({
      ...options,
      template: (data) => `
        <div class="jsap-widget-file-input">
          <input type="file" id="${(link unavailable)}" multiple="${data.multiple}">
          <label for="${(link unavailable)}">${data.label}</label>
          <span class="jsap-widget-file-input-filename">${data.filename}</span>
        </div>
      `,
      styles: `
        .jsap-widget-file-input {
          position: relative;
        }
        .jsap-widget-file-input input {
          opacity: 0;
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          cursor: pointer;
        }
        .jsap-widget-file-input label {
          padding: 10px;
          border: 1px solid #ccc;
          border-radius: 5px;
          cursor: pointer;
        }
        .jsap-widget-file-input-filename {
          margin-left: 10px;
        }
      `,
    });
  }
}

export default FileInput;

/*
 * 
 
import FileInput from './file-input.js';

const fileInput = new FileInput({
  id: 'my-file-input',
  data: {
    label: 'Select file',
    multiple: true,
    filename: 'No file selected',
  },
});

*/