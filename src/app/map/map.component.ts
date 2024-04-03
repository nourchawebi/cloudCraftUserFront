import {Component, Input, OnInit} from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import * as MapboxDraw from '@mapbox/mapbox-gl-draw';
import { Output, EventEmitter } from '@angular/core';
import {DataService} from "../services/data.service";

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  map: mapboxgl.Map | undefined;
  style = 'mapbox://styles/mapbox/streets-v11';
  lat: number = 36.81882724364231;
  lng: number = 10.183798348069377;
  draw: any;

  @Input() state = false;

  @Output() newItemEvent = new EventEmitter<any>();

  location={
    latitude : 0,
    longitude : 0,
    nameLocation : ""
  }

  constructor(private dataService: DataService) {
    this.draw = new MapboxDraw({
      displayControlsDefault: false,
      // Select which mapbox-gl-draw control buttons to add to the map.
      controls: {
        line_string:true,
        point:true,
        trash:true,
      },
      // Set mapbox-gl-draw to draw by default.
      // The user does not have to click the polygon control button first.
      defaultMode: 'draw_line_string',
    });
  }

  fun(){
      this.newItemEvent.emit(this.draw.getAll().features[0].geometry.coordinates);
  }


  ngOnInit(): void {

    this.map = new mapboxgl.Map({
      accessToken: 'pk.eyJ1IjoiYWNocmVmczkiLCJhIjoiY2xrOHZhbHFtMDdpbjNlbzVib3EzNWZ4MSJ9.cS91fXGH_gJUcL_XNx8mxw',
      container: 'map',
      style: this.style,
      zoom: 11,
      center: [this.lng, this.lat]
    });

    this.map.addControl(this.draw);
    this.draw.add({ type: 'LineString', coordinates: [[0, 0],[5,5]] });

  }

}
