import Widget from './widget.js';

class Map extends Widget {
    constructor(options) {
        super({
            ...options,
            template: (data) => `
                <div id="map" style="width: 100%; height: 300px;"></div>
            `,
        });
        this.map = null;
    }
    
    afterRender() {
        this.map = new google.maps.Map(document.getElementById('map'), {
            center: { lat: this.data.lat, lng: this.data.lng },
            zoom: this.data.zoom,
        });
    }
}

export default Map;