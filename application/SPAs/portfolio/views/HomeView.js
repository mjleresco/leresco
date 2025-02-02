import View from './../../src/core/view.js';
//import {generateVideoThumbnail} from './../../src/libs/VideoThumbnailGenerator.js';
import {navigateTo} from './../main.js';

import Header from './../components/Header.js';
import Nav from './../components/Nav.js';
import Footer from './../components/Footer.js';

import Audio from './../../src/widgets/Audio.js';
import Video from './../../src/widgets/Video.js';
import Map from './../../src/widgets/Map.js';
import Chart from './../../src/widgets/Chart.js';
import Gauge from './../../src/widgets/Gauge.js';
import Loader from './../../src/widgets/Loader.js';
import Tooltip from './../../src/widgets/Tooltip.js';
import Popover from './../../src/widgets/Popover.js';
import Rating from './../../src/widgets/Rating.js';
import SocialShare from './../../src/widgets/SocialShare.js';
import Projects from './../models/Projects.js';
    
class HomeView  extends View {
    constructor() {
        super({
            template: `
                  <!-- Header -->
                  <c:Header>
                  
                  <!-- Hero Section -->
                  <section id="home">
                    <h1>Welcome to My Portfolio Website</h1>
                    <p>I'm Hussaini .Y. Hussaini, a full stack web developer with a passion for creating responsive website with modern features.</p>
                    <a href="#contact">
                        <button>Contact Me</button>
                    </a>
                  </section>
                
                  <!-- About Section -->
                  <section id="about">
                    <h2>About Me</h2>
                    <p>I am a passionate web designer and developer with experience in HTML, CSS, JavaScript, PHP, and my own full-stack framework (JSAP). I enjoy creating dynamic, responsive websites that provide an exceptional user experience.</p>
                    <img src="/.leresco/application/SPAs/portfolio/assets/images/about-image.png" alt="About Image">
                    <button class="see-more-btn" id="about-l" >See More About me</button>
                  </section>
                
                  <!-- Projects Section -->
                  <section id="projects">
                    <h2>My Projects</h2>
                    <ul>
                      <foreach items="projects" as="project">
                        <li class="pj">
                          <img src="{{project.image}}" alt="{{project.title}}">
                          <h3>{{project.title}}</h3>
                          <p>Type: {{project.type}}</p>
                          <p>{{project.description}}</p>
                          <ul>
                            <foreeach items="project.skills" as="skill">
                              <li>{{project.skills}}</li>
                            </foreeach>
                          </ul>
                          <div class="project-links">
                            <a href="{{project.links}}" target="_blank">Live Demo</a>
                          </div>
                        </li>
                      </foreach>
                    </ul>
                    <button class="see-more-btn" id="projects-l" >See More Projects</button>
                  </section>
                
                  <!-- Blog Section -->
                  <section id="blog">
                    <h2>My Blog</h2>
                    <ul>
                      <li>
                        <h3>Blog Post 1</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                      </li>
                      <li>
                        <h3>Blog Post 2</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                      </li>
                    </ul>
                    <button class="see-more-btn" id="blog-l" >See More Posts</button>
                  </section>
                  
                  <c:Footer>
                
                  <script"></script>
                
            `,
            components: {
                Header: new Header('home-link'),
                Footer: new Footer,
            },
            data: {
                projects: []//Object.entries(projs),
            },
        });
            
    }
    
    async onMount() {
        
        const about = document.getElementById('about-l');
        const projects = document.getElementById('projects-l');
        const blog = document.getElementById('blog-l');
        
        projects.addEventListener('click', (e) => {
            navigateTo('/projects');
        });
        
        blog.addEventListener('click', (e) => {
            navigateTo('/blog');
        });
        
        let projs = await (new Projects()).getData();
        this.data.projects = Object.entries(projs)
        
    }
    
    
}

export default new HomeView;
