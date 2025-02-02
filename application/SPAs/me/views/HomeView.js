import View from './../../src/core/view.js';
import {generateVideoThumbnail} from './../../src/libs/VideoThumbnailGenerator.js';

import Header from './../components/Header.js';
import Nav from './../components/Nav.js';
import Footer from './../components/Footer.js';

import Grid from './../../src/widgets/Grid.js';
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

async function getPoster(data) {
    let tg = await generateVideoThumbnail(data, 1);
    return tg;
}

async function createHomeView() {
    const poster = getPoster('/.leresco/application/SPAs/me/assets/videos/video.mp4');
    
    const HomeView = new View({
        template: `
            <c:Header>
            <main>
                <h1>Statistics!</h1>
                <w:StatGrid>
            </main>
            <c:Footer>
        `,
        components: {
            Header: new Header('home-link'),
            Footer: new Footer
        },
        widgets: {
            StatGrid: new Grid({
              id: 'my-grid',
              data: {
                rows: [
                  {
                    columns: [
                      {
                        width: '50%',
                        content: '2987 <br />Messages',
                      },
                      {
                        width: '50%',
                        content: '50+ <br />New Messages',
                      },
                    ],
                  },
                  {
                    columns: [
                      {
                        width: '33.33%',
                        content: '47<br />Projects',
                      },
                      {
                        width: '33.33%',
                        content: '56<br />Blog Posts',
                      },
                      {
                        width: '33.33%',
                        content: '25 Website proposals',
                      },
                    ],
                  },
                ],
              },
            }),
            
            Audio: new Audio({
                data: {
                    src: '/.leresco/application/SPAs/me/assets/audios/bell_sound.mp3',
                    type: 'audio/mpeg',
                }
            }),
            
            Video: new Video({
                data: {
                    src: '/.leresco/application/SPAs/me/assets/videos/video.mp4',
                    type: 'video/mp4',
                    width: '100%',
                    height: '400px',
                    poster: poster,
                }
            }),
            
            Loader: new Loader({
                data: {
                    size: 50,
                    color: '#007bff'
                }
            }),
            
            Popover: new Popover({
                data: {
                    content: 'This is a popover',
                    top: 350,
                    left: 100
                }
            }),
            
            Rating: new Rating({
                data: {
                    value: 3,
                    maxValue: 5
                }
            }),
            
            SocialShare: new SocialShare({
                data: {
                    platforms: [
                        {
                            url: 'https://facebook.com',
                            icon: 'fa fa-facebook',
                            text: 'facebook'
                        },
                        {
                            url: 'https://twitter.com',
                            icon: 'fa fa-twitter',
                            text: 'twitter'
                        }
                    ]
                }
            })
            
        }
    
    });
    
    return HomeView;
}

let HomeView = await createHomeView();
export default HomeView;
