import View from './../../src/core/view.js';
import Header from './../components/Header.js';
import Nav from './../components/Nav.js';
import Footer from './../components/Footer.js';

const AboutView = new View({
    template: `
        <c:Header>
        <main>
            <div id="header">
                <center><h2>About Me </h2></center>
            </div>
            <section id="about">
                <h4>Hello! I'm Hussaini Yusuf Hussaini </h4>
                <p>I am a passionate web designer and developer with experience in HTML, CSS, JavaScript, PHP, and my own full-stack framework. I enjoy creating dynamic, responsive websites that provide an exceptional user experience.</p>
            </section>
            
            <section id="about">
                <h3>Skills</h3>
                <ul>
                    <li>HTML, CSS, JavaScript</li>
                    <li>PHP and MySQL</li>
                    <li>Responsive Design</li>
                    <li>Web Performance Optimization</li>
                    <li>SEO Best Practices</li>
                    <li>Version Control (Git)</li>
                </ul>
            </section>
            
            <section id="about">
                <h3>Experience</h3>
                <p>I have worked on various projects ranging from small business websites to complex web applications. My goal is to combine my knowledge and experience in these areas to deliver the best quality work to my clients.</p>
            </section>
        </main>
        <c:Footer>
    `,
    components: {
        Header: new Header('about-link'),
        Footer: new Footer
    },
    
});

export default AboutView;
