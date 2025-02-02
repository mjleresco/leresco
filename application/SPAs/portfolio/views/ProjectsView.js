import ajax from './../../src/utils/ajax.js';
import View from './../../src/core/view.js';
import Header from './../components/Header.js';
import Nav from './../components/Nav.js';
import Footer from './../components/Footer.js';
import Projects from './../models/Projects.js';

//let projs = new Projects();
//let data = await projs.getData();

const ProjectsView = new View({
  template: `
    <c:Header>
      <main>
        <div id="projects-page">
          <div id="header">
            <h2>My Projects</h2>
            <select id="categories">
              <option>Full stack</option>
              <option>Front end</option>
              <option>Back end</option>
            </select>
          </div>
          <div class="main">
            <!-- Introduction -->
            <p class="intro">
              As a full-stack web developer, I have experience building a wide range of web applications. Here are some of my notable projects:
            </p>
            <br />
            <div class="project-grid">
                <foreach items="projects" as="project">
                  <div class="project-card">
                    <img src="{{project.image}}" alt="{{project.title}}">
                    <h2>{{project.title}}</h2>
                    <h3>Type: {{project.type}}</h3>
                    <p>{{project.description}}</p>
                    <ul>
                      <foreeach items="project.skills" as="skill">
                        <li>{{project.skills}}</li>
                      </foreeach>
                    </ul>
                    <div class="project-links">
                      <a href="{{project.links}}" target="_blank">Live Demo</a>
                    </div>
                  </div>
                </foreach>
            </div>
            <!-- Call-to-Action (Optional) -->
            <p class="cta">
              If you'd like to learn more about my projects or discuss potential collaborations, please don't hesitate to <a href="mailto:your-email@example.com">contact me</a>.
            </p>
          </div>
        </div>
      </main>
      <c:Footer>
    `,
  components: {
    Header: new Header('projects-link'),
    Footer: new Footer,
  },
  data: {
    projects: [],
  },
});

// Fetch projects data when the view is mounted
ProjectsView.onMount = async () => {
  const projectsData = await (new Projects()).getData();
  ProjectsView.data.projects = Object.entries(projectsData);
}

export default ProjectsView;



