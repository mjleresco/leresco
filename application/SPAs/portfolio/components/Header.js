import Component from './../../src/components/component.js';
import {navigateTo} from './../main.js';

class Header extends Component {
    constructor(currentPage){
        super({
            template: `
                <header>
                    <div class="toolbar">
                        <img class="icon" src=".leresco/application/SPAs/me/assets/images/icon.png" alt="icon" />
                        <span>
                            <font class="name" face="Times New Roman" size="+3" >MJ-LERESCO</font>
                        </span>
                    </div>
                    <nav>
                        <ul>
                            <li><a id="blog-link" href="/blog">Blog</a></li>
                            <li><a id="home-link" href="/">Home</a></li>
                            <li><a id="about-link" href="/about">About</a></li>
                            <li><a id="projects-link" href="/projects">Projects</a></li>
                        </ul>
                    </nav>
                </header>
            `
        });
        
        this.currentPage = currentPage;
        
    }
    
    async mounted(){
        this.setCurrentPage(this.currentPage);
        
        this.bindEvent('#home-link', 'click', (event) => {
          event.preventDefault(); // Prevent default link behavior
          navigateTo('/');
        });
        
        this.bindEvent('#about-link', 'click', (event) => {
          event.preventDefault(); // Prevent default link behavior
          navigateTo('/about');
        });
        
        this.bindEvent('#blog-link', 'click', (event) => {
          event.preventDefault(); // Prevent default link behavior
          navigateTo('/blog');
        });
        
        this.bindEvent('#projects-link', 'click', (event) => {
          event.preventDefault(); // Prevent default link behavior
          navigateTo('/projects');
        });
        
    }
    
    setCurrentPage(link) {
      let el = document.getElementById(link);
      // Remove 'current' class from all links
      document.querySelectorAll('nav ul li a').forEach((a) => {
        a.classList.remove('current');
      });
      // Add 'current' class to the current link
      el.classList.add('current');
    }
    
}

export default Header;
