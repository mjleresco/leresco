import Model from './../../src/core/model.js';
import ajax from './../../src/utils/ajax.js';

class Projects extends Model {
  constructor() {
    super();
    this.data = null;
  }

    async fetchProjects() {
        try {
            if(!this.data){
                const response = await ajax.get('/api/projects');
                this.data = response.data;
                return this.data;
            }
            
        } catch (error) {
            if (error instanceof SyntaxError) {
                console.error('JSON parsing error:', error);
            } else {
                console.error('Error fetching projects:', error);
            }
        }
    }
    
    async getData() {
        if(!this.data){
            const response = await ajax.get('/api/projects');
            this.data = response.data;
            return this.data;
        }
        return this.data;
    }
    
    async createProject(projectData) {
      try {
        const response = await ajax.post('/api/projects', projectData);
        this.setData(response);
      } catch (error) {
        console.error('Error creating project:', error);
      }
    }

  async updateProject(projectId, projectData) {
    try {
      const response = await ajax.put(`/api/projects/${projectId}`, projectData);
      this.setData(response);
    } catch (error) {
      console.error('Error updating project:', error);
    }
  }

  async deleteProject(projectId) {
    try {
      const response = await ajax.delete(`/api/projects/${projectId}`);
      this.setData(response);
    } catch (error) {
      console.error('Error deleting project:', error);
    }
  }
}

export default Projects;