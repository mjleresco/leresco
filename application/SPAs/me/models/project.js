import Model from './../../src/core/model.js';

class Project extends Model {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name,
      description: props.description,
      url: props.url,
    };
  }
}

const projects = [
  {
    name: 'Project 1',
    description: 'This is project 1',
    url: '(link unavailable)',
  },
  {
    name: 'Project 2',
    description: 'This is project 2',
    url: '(link unavailable)',
  },
  {
    name: 'Project 3',
    description: 'This is project 3',
    url: '(link unavailable)',
  },
];

export default {Project, projects};
