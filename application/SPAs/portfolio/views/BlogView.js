import View from './../../src/core/view.js';
import {generateVideoThumbnail} from './../../src/libs/VideoThumbnailGenerator.js';

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

async function createBlogView() {
    const BlogView = new View({
        template: `
              <!-- Header -->
              <c:Header>
              
              <!-- Hero Section -->
              <section id="blog-posts">
                <div id="header">
                    <font id="text" face="times new roman" >My Posts</font>
                    <select id="categories">
                        <option>--Select Category--</option>
                        <option>Front end</option>
                        <option>Back end</option>
                    </select>
                    <!--
                    <input type="search" name="search-post" id="search-post" />
                    
                    <button id="search-btn">Search</button>
                    -->
                </div>
                <br /><br />
                <div id="posts">
                    <ul>
                      <li>
                        <h3>Blog Post 1</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                      </li>
                      <li>
                        <h3>Blog Post 2</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <a href="/blog/post/post-id" >Read more...</a></p>
                        
                      </li>
                    </ul>
                </div>
              </section>
            
              <!-- Footer -->
              <c:Footer>
            
            
        `,
        components: {
            Header: new Header('blog-link'),
            Footer: new Footer,
        }
    });
    
    return BlogView;
}

let BlogView = await createBlogView();
export default BlogView;
