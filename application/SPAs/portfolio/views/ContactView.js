import View from './../../src/core/view.js';
import Header from './../components/Header.js';
import Nav from './../components/Nav.js';
import Footer from './../components/Footer.js';

const ContactView = new View({
    template: `
        <c:Header>
        <main>
            <h1>Contact me</h1>
            <p>This is my contact information.</p>
        </main>
        <c:Footer>
    `,
    components: {
        Header: new Header('contact-link'),
        Footer: new Footer
    },
    
});
export default ContactView;
