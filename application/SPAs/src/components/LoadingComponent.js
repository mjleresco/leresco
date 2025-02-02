import Component from './component.js';

class LoadingComponent extends Component {
  render() {
    return `
      <div class="loading-container">
        <div class="loading-spinner"></div>
        <p>Loading...</p>
      </div>
    `;
  }
}

export default LoadingComponent;
