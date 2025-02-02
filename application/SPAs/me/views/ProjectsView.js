import View from './../../src/core/view.js';

import Header from './../components/Header.js';
import Nav from './../components/Nav.js';
import Footer from './../components/Footer.js';

import Chat from './../../src/widgets/Chat.js';

import ProjectCard from './../components/ProjectCard.js';
import projects from './../models/project.js';

const ProjectsView = new View({
            template: `
                <c:Header>
                <main>
                    <h1>My projects</h1>
                    <w:Chat>
                </main>
                <c:Footer>
            `,
            components: {
                Header: new Header('projects-link'),
                Footer: new Footer
            },
            widgets: {
                Chat: new Chat({
                    id: 'my-chat',
                    data: {
                        title: 'Chat Window',
                        messages: [
                            {from: 'Amina Mansir', text: 'Slm'},
                            {from: 'You', text: 'Wlkm slm'},
                            {from: 'Amina Mansir', text: 'Ykk'},
                            {from: 'You', text: 'Lfy lau'},
                        ],
                    },
                }),
            }
        });



export default ProjectsView;
