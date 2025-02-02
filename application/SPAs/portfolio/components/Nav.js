import Component from './../../src/components/component.js';

class Nav extends Component {
    constructor(){
        super({
            template: `
                <nav>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contact</a></li>
                        <li><a href="#">Projects</a></li>
                    </ul>
                </nav>
            `
        });
    }
}

export default Nav;
