import View from './../../src/core/view.js';

import Header from './../components/Header.js';
import Nav from './../components/Nav.js';
import Footer from './../components/Footer.js';

import Messages from './../../src/widgets/Messages.js';

import ProjectCard from './../components/ProjectCard.js';
import projects from './../models/project.js';

const MessagesView = new View({
            template: `
                <c:Header>
                <main>
                    <w:Messages>
                </main>
            `,
            components: {
                Header: new Header('messages-link'),
            },
            widgets: {
                Messages: new Messages({
                id: 'my-messages',
                data: {
                  messages: [
                    {
                      id: 1,
                      avatar: 'image.jpg',
                      name: 'John Doe',
                      text: 'Hello, how are you?',
                      timestamp: '10:00 AM',
                    },
                    {
                      id: 2,
                      avatar: 'image.jpg',
                      name: 'Jane Doe',
                      text: 'I am good, thanks!',
                      timestamp: '10:05 AM',
                    },
                    {
                      id: 3,
                      avatar: 'image.jpg',
                      name: 'John Doe',
                      text: 'Hello, how are you?',
                      timestamp: '10:00 AM',
                    },
                    {
                      id: 4,
                      avatar: 'image.jpg',
                      name: 'Jane Doe',
                      text: 'I am good, thanks!',
                      timestamp: '10:00 AM',
                    },
                    {
                      id: 5,
                      avatar: 'image.jpg',
                      name: 'Bob Smith',
                      text: 'What is up?',
                      timestamp: '10:00 AM',
                    },
                  ],
                },
                }),
            }
        });



export default MessagesView;
