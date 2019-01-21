export class App {
  constructor() {
    this.message = "Hello world";
  }
  
  attached() {
    const view = new ol.View({
      center: ol.proj.fromLonLat([-122.7917, 49.2856]),
      zoom: 16
    });
    
    const map = new ol.Map({
      target: "map",
      layers: [
        new ol.layer.Tile({
          preload: 4,
          source: new ol.source.OSM()
        })
      ],
      view: view
    });
  }  
}
