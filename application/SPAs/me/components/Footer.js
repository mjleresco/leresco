import Component from './../../src/components/component.js';

class Footer extends Component {
    constructor(){
        super({
            template: `
                <footer>
                <p>&copy; 2023 My Portfolio</p>
                </footer>
            `
        });
    }
}

export default Footer;
