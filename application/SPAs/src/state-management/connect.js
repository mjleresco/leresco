// connect.js
import Component from './component'; // Import our custom component class
import Store from './store';

const connect = (mapStateToProps, mapDispatchToProps) => (WrappedComponent) => {
    if (typeof mapStateToProps !== 'function' || typeof mapDispatchToProps !== 'function') {
        throw new Error('mapStateToProps and mapDispatchToProps must be functions');
    }
    
    class ConnectedComponent extends WrappedComponent {
        constructor(props) {
            super(props);
            this.state = mapStateToProps(Store.getState());
            this.actions = mapDispatchToProps(Store.dispatch);
            Store.subscribe(() => {
                this.setState(mapStateToProps(Store.getState()));
            });
        }

    render() {
      return super.render({
        ...this.props,
        state: this.state,
        actions: this.actions,
      });
    }
  }

  return ConnectedComponent;
};

export default connect;



/*
// MyComponent.js
import Component from './component';
import connect from './connect';
import Store from './store';

const mapStateToProps = (state) => {
  return {
    value: state.value,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateValue: (value) => dispatch({ type: 'UPDATE_VALUE', payload: value }),
  };
};

class MyComponent extends Component {
  render() {
    return (
      <div>
        <p>Value: {this.props.state.value}</p>
        <button onClick={() => this.props.actions.updateValue('New value')}>Update value</button>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyComponent);
*/