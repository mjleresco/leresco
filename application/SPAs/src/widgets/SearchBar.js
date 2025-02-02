=import Widget from './widget.js';

class SearchBar extends Widget {
  constructor(options) {
    super({
      ...options,
      template: (data) => `
        <div class="jsap-widget-search-bar">
          <input type="search" id="${(link unavailable)}" placeholder="${data.placeholder}">
          <button type="submit">${data.buttonText}</button>
        </div>
      `,
      styles: `
        .jsap-widget-search-bar {
          display: flex;
          align-items: center;
          padding: 10px;
          border: 1px solid #ccc;
          border-radius: 5px;
        }
        .jsap-widget-search-bar input[type="search"] {
          width: 75%;
          padding: 10px;
          border: none;
          border-radius: 5px 0 0 5px;
        }
        .jsap-widget-search-bar button[type="submit"] {
          width: 25%;
          padding: 10px;
          border: none;
          border-radius: 0 5px 5px 0;
          background-color: #337ab7;
          color: #fff;
          cursor: pointer;
        }
        .jsap-widget-search-bar button[type="submit"]:hover {
          background-color: #23527c;
        }
      `,
    });
  }
}

export default SearchBar;

/*
import SearchBar from './search-bar.js';

const searchBar = new SearchBar({
  id: 'my-search-bar',
  data: {
    placeholder: 'Search...',
    buttonText: 'Search',
  },
});

*/