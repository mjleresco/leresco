import Component from './../../src/components/component.js';
import ajax from './../../src/utils/ajax.js';

class ContactComponent extends Component {
  render() {
    return `
      <h1>Contact Us</h1>
      <form>
        <input type="text" name="name" placeholder="Name">
        <input type="email" name="email" placeholder="Email">
        <textarea name="message" placeholder="Message"></textarea>
        <button type="submit">Send</button>
      </form>
    `;
  }
/*
  async handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const response = await ajax.post('/api/contact', formData);
    console.log(response.data);
  }
*/
}

export default ContactComponent;