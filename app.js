export class App {
  constructor() {
    this.message = "Hello world";
  }
  
  attached() {
    const view = new OpenLayers.View({
      center: OpenLayers.fromLonLat([-122.7917, 49.2856]),
      zoom: 16
    });
    
    const map = new OpenLayers.Map({
      target: "map",
      layers: [
        new OpenLayers.TileLayer({
          preload: 4,
          source: new OpenLayers.OSM()
        })
      ],
      view: view
    });
  }  
}
