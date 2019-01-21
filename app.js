import Map from "ol/Map.js";
import View from "ol/View.js";
import TileLayer from "ol/layer/Tile.js";
import { fromLonLat } from "ol/proj.js";
import OSM from "ol/source/OSM.js";

export class App {
  constructor() {
    this.message = "Hello world";
  }
  
  attached() {
    const view = new View({
      center: fromLonLat([-122.7917, 49.2856]),
      zoom: 16
    });
    
    const map = new Map({
      target: "map",
      layers: [
        new TileLayer({
          preload: 4,
          source: new OSM()
        })
      ],
      view: view
    });
  }  
}
