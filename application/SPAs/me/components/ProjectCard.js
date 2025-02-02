import Component from './../../src/components/component.js';

class ProjectCard extends Component {
    constructor(){
        super({
            template: `
                <div>
                    <h2>${this.props.project.name}</h2>
                      <p>${this.props.project.description}</p>
                      <a href="${this.props.project.url}">View Project</a>
                </div>
            `
        });
    }
    
}

export default ProjectCard;
