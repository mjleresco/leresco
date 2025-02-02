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

document.body.style.backgroundColor = '#ff9';
//AudioWidget
const audioWidget = new Audio({
  src: 'audio.mp3',
  type: 'audio/mpeg',
});

const audioHtml = audioWidget.render();
//document.body.innerHTML += audioHtml;


//VideoWidget
const videoWidget = new Video({
  src: 'video.mp4',
  type: 'video/mp4',
});

const videoHtml = videoWidget.render();
//document.body.innerHTML += videoHtml;

/*
//MapWidget
const mapWidget = new Map({
  lat: 37.7749,
  lng: -122.4194,
  zoom: 12,
});

const mapHtml = mapWidget.render();
document.body.innerHTML += mapHtml;
mapWidget.afterRender();
*/

//Chart

const chartWidget = new Chart({
  type: 'bar',
  data: {
    labels: ['January', 'February', 'March'],
    datasets: [{
      label: 'Series A',
      data: [10, 20, 30],
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 1,
    }],
  },
  options: {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true,
        },
      }],
    },
  },
});

const chartHtml = chartWidget.render();
document.body.innerHTML += chartHtml;
chartWidget.afterRender();


//GaugeWidget
const gaugeWidget = new Gauge({
  value: 50,
});

const gaugeHtml = gaugeWidget.render();
document.body.innerHTML += gaugeHtml;

//Loader
const loaderWidget = new Loader({
    data: {
        size: 50,
        color: '#007bff'
    }
});

const loaderHtml = loaderWidget.render();
document.body.innerHTML += loaderHtml;


//Tooltip
const tooltipWidget = new Tooltip({
    data: {
        text: 'This is a tooltip',
        top: 100,
        left: 100
    }
});

const tooltipHtml = tooltipWidget.render();
document.body.innerHTML += tooltipHtml;


//Popover
const popoverWidget = new Popover({
    data: {
        content: 'This is a popover',
        top: 600,
        left: 100
    }
});

const popoverHtml = popoverWidget.render();
document.body.innerHTML += popoverHtml;

const ratingWidget = new Rating({
    data: {
        value: 3,
        maxValue: 5
    }
});

const ratingHtml = ratingWidget.render();
document.body.innerHTML += ratingHtml;


//SocialShare
const socialShareWidget = new SocialShare({
    data: {
        platforms: [
            {
                url: 'https://facebook.com',
                icon: 'fa fa-facebook',
            },
            {
                url: 'https://twitter.com',
                icon: 'fa fa-twitter',
            }
        ]
    }
});

const socialShareHtml = socialShareWidget.render();
document.body.innerHTML += socialShareHtml;
