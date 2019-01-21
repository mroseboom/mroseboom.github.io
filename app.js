export class App {
  constructor() {
    this.message = "Hello world";
  }
  
  attached() {
    const view = new ol.View({
      center: ol.proj.fromLonLat([14.2643, 46.6158]),
      zoom: 5,
      maxZoom: 16,
      minZoom: 5
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
