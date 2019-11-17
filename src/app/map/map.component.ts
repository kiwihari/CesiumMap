import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  constructor() { }

  ngOnInit(){}

  ngAfterViewInit() {
    const map = L.map('map', {
      // center: [43.00, -79.00],
      zoom: 15,
      zoomControl: true,
    }).setView([43.64701, -79.39425], 15);

    //mapbox is proprietory mapping service. we can use OSM as free service.
    // 'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={pk.eyJ1IjoiaXNoYXJha2l3aSIsImEiOiJjazMzMjloMTAwYmVkM2NtcWM4ZzVsbXp5In0.kNVg221N7_u6xy1-a7Pi6w}
    
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', 
    {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>',
      maxZoom: 18,
    }).addTo(map);
  }
}
