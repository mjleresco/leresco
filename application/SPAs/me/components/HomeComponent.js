import Component from './../../src/components/component.js';
import ajax from './../../src/utils/ajax.js';
import router from './../routes.js';

class HomeComponent extends Component {
    render() {
        return `
            <body>
            <header>
                <h1>My Website</h1>
            </header>
            <nav>
                <a href="/" id="home-link">Home</a>
                <a href="/" id="about-link">About</a>
                <a href="/" id="contact-link">Contact</a>
            </nav>
            <ul>
                {{#each projects}}
                    <li>
                        <a class="projects" href="{{url}}">{{title}}</a>
                    </li>
                {{/each}}
                
            </ul>
            </body>
        `;
    }
    
    async mounted() {
        
        const response = await ajax.get(`/projects/get-all`);
        const projects = response.projects;
        this.setState({ projects });
        
        this.bindEvent('#home-link', 'click', (event) => {
            event.preventDefault(); // Prevent default link behavior
            router.navigate('app', '/');
        });
        
        this.bindEvent('#about-link', 'click', (event) => {
            event.preventDefault(); // Prevent default link behavior
            router.navigate('app', '/about');
        });
        this.bindEvent('#contact-link', 'click', (event) => {
            event.preventDefault(); // Prevent default link behavior
            router.navigate('app', '/contact');
        });
        
        this.bindEvent('.article', 'click', (event) => {
            event.preventDefault(); // Prevent default link behavior
            router.navigate('app', event.href);
        });
    }        
}

export default HomeComponent;

