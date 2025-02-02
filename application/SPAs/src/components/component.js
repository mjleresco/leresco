class Component {
    constructor(props = {}) {
        this.props = props;  // Properties passed from the parent
        this.state = {};      // Internal state for the component
        this.listeners = {};  // Event listeners for the component
        
    }

    // Lifecycle method - Called when the component is mounted
    mounted() {}

    // Lifecycle method - Called when the component is updated
    updated() {}

    // Lifecycle method - Called before the component is unmounted
    unmounted() {}

    // Set component state and trigger re-render
    setState(newState) {
        this.state = { ...this.state, ...newState };
        this.updated();
        this.update();
    }

    // Render the component based on state and props
    render() {
        return this.props.template;
    }

    // Re-render the component when state changes
    update() {
        const root = document.getElementById(this.props.id);
        if (root) {
            root.innerHTML = this.render();
        }
    }

    // Add an event listener
    addEventListener(event, callback) {
        this.listeners[event] = callback;
        document.addEventListener(event, callback);
    }

    // Remove an event listener
    removeEventListener(event) {
        const callback = this.listeners[event];
        if (callback) {
            document.removeEventListener(event, callback);
            delete this.listeners[event];
        }
    }

    // A utility to bind events to DOM elements inside the component
    bindEvent(selector, event, handler) {
        const element = document.querySelector(selector);
        if (element) {
            element.addEventListener(event, handler);
        }
    }
}

export default Component;