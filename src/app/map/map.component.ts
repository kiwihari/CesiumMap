import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})

export class MapComponent implements OnInit {

  map: L.map;
  markerArray = [];
  polygonLayer;

  constructor() {
    delete L.Icon.Default.prototype._getIconUrl;

    L.Icon.Default.mergeOptions({
      iconRetinaUrl: './assets/images/marker-icon-2x.png',
      iconUrl: './assets/images/marker-icon.png',
      shadowUrl: './assets/images/marker-shadow.png',
    });
  }

  ngOnInit(){}

  ngAfterViewInit() {
    this.map = L.map('map', {
      // center: [43.00, -79.00],
      zoom: 15,
      zoomControl: true,
    }).setView([43.64701, -79.39425], 15);

    //var marker = L.marker([51.5, -0.09]).addTo(map);
    // mapbox is proprietory mapping service. we can use OSM as free service.
    // 'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={pk.eyJ1IjoiaXNoYXJha2l3aSIsImEiOiJjazMzMjloMTAwYmVkM2NtcWM4ZzVsbXp5In0.kNVg221N7_u6xy1-a7Pi6w}

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', 
    {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>',
      maxZoom: 18,
    }).addTo(this.map);

    var polygon = L.polygon([
      [51.509, -0.08],
      [51.503, -0.06],
      [51.51, -0.047]
  ]);
  polygon.addTo(this.map);
  }

  updateMarkers(e): void{
    let arr = e.polygonArray;
    if(Array.isArray(arr)){
      arr = arr.map(x=>{
        const latlng = x.split(',');
        return [parseFloat(latlng[0]),parseFloat(latlng[1])];
      });
      this.drawMarkers(arr);
    }
  }

  drawMarkers(arr): void{
    this.removePreviousMarkers();
    arr.forEach(latlng => {
      const m = L.marker(latlng).addTo(this.map);
      this.markerArray.push(m);
    });
    this.drawPolygon(arr);
  }

  removePreviousMarkers(){
    this.markerArray.forEach(x => {
      if(this.map.hasLayer(x)){
        this.map.removeLayer(x);
      }
    })
  }

  drawPolygon(arr){
    if(this.polygonLayer == null){
      this.polygonLayer = L.polygon(arr, {color: 'red',fill: false}).bindTooltip('add marker').addTo(this.map);
    }else{
      this.polygonLayer.setLatLngs(arr);
    }
    
  }
}
