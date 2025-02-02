import View from './../../src/core/view.js';
import Header from './../components/Header.js';
import Nav from './../components/Nav.js';
import Footer from './../components/Footer.js';

const BlogView = new View({
    template: `
        <c:Header>
        <main>
            <section class="about-section">
                <div class="container">
                    <h2>About Leresco Dev. and Tech.</h2>
                    <p>Welcome! I'm Hussaini Yusuf Hussaini, the founder of Leresco Dev. and Tech., a company dedicated to creating website/web app and delivering high-quality web solutions. With years of experience in web design and development, I strive to provide tailored services that help businesses and individuals achieve their online goals.</p>
                    <br />
                    <h3>My Journey</h3>
                    <p>Started as a passionate coder, I have worked on a wide range of projects, from simple websites to complex web applications. My journey has been driven by a commitment to innovation, quality, and customer satisfaction.</p>
                    <br />
                    <h3>Why Work with Me?</h3>
                    <ul>
                        <li>Expert in modern web technologies and frameworks</li>
                        <li>Custom solutions tailored to your needs</li>
                        <li>Strong focus on responsive design and user experience</li>
                        <li>Dedicated to helping you succeed online</li>
                    </ul>
                    <br />
                    <h3>Our Web Spaces and Web Apps</h3>
                    <p>We offer a variety of specialized web spaces and apps designed to meet diverse needs:</p>
                    <ul>
                        <li><strong>News Web Space:</strong> A platform for journalists.</li>
                        <li><strong>Articles Web Space:</strong> For writers to share their works.</li>
                        <li><strong>Libraries Web Space:</strong> Create, manage, and share digital libraries.</li>
                        <li><strong>Communities Web Space:</strong> Build and engage with communities.</li>
                        <li><strong>RSP Office:</strong> For school report sheet processing.</li>
                        <li><strong>Oshop:</strong> Create and manage online shops.</li>
                        <li><strong>Ostore:</strong> Upload and share digital content.</li>
                        <li><strong>Eduweb:</strong> An educational hub for instructors and learners.</li>
                    </ul>
                </div>
            </section>
            <br />
            <section class="about">
                <div class="container">
                    <h2>About Me </h2>
                    <h4>Hello! I'm Hussaini Yusuf Hussaini </h4>
                    <p>I am a passionate web designer and developer with experience in HTML, CSS, JavaScript, PHP, and my own full-stack framework. I enjoy creating dynamic, responsive websites that provide an exceptional user experience.</p>
                    <br />
                    <h3>Skills</h3>
                    <ul>
                        <li>HTML, CSS, JavaScript</li>
                        <li>PHP and MySQL</li>
                        <li>Responsive Design</li>
                        <li>Web Performance Optimization</li>
                        <li>SEO Best Practices</li>
                        <li>Version Control (Git)</li>
                    </ul>
                    <br />
                    <h3>Experience</h3>
                    <p>I have worked on various projects ranging from small business websites to complex web applications. My goal is to combine my knowledge and experience in these areas to deliver the best quality work to my clients.</p>
                </div>
            </section>
        </main>
        <c:Footer>
    `,
    components: {
        Header: new Header('blog-link'),
        Footer: new Footer
    },
    
});

export default BlogView;
