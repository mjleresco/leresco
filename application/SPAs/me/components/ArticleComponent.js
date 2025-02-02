import Component from './../../src/components/component.js';
import ajax from './../../src/utils/ajax.js';

class ArticleComponent extends Component {
  render() {
    return `
      <h1>{{title}}</h1>
      <p>{{content}}</p>
    `;
  }

  async mounted() {
    /*const id = (link unavailable);
    const response = await ajax.get(`/api/articles/${id}`);
    const article = response.data;
    this.setState({ article });*/
  }
}

export default ArticleComponent;