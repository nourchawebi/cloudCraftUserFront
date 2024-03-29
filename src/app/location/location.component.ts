import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import * as mapboxgl from "mapbox-gl";
import {DataService} from "../data.service";
import * as MapboxDraw from "@mapbox/mapbox-gl-draw";
import {waitForAsync} from "@angular/core/testing";

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit{

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
          point:true,
          trash:true,
        },
        // Set mapbox-gl-draw to draw by default.
        // The user does not have to click the polygon control button first.
        defaultMode: 'draw_point',
      });
  }

  async fg(){

  }
  update(){
    this.location.latitude = this.draw.getAll().features[0].geometry.coordinates[1]
    this.location.longitude = this.draw.getAll().features[0].geometry.coordinates[0]
    this.dataService.getAddress(this.location.longitude,this.location.latitude).subscribe(value =>
      this.location.nameLocation = value.features[0].place_name)
  }
  saveLocation(){
    this.dataService.saveLocation(this.location)
  }
  ngOnInit(): void {
    this.map = new mapboxgl.Map({
      accessToken: 'pk.eyJ1IjoiYWNocmVmczkiLCJhIjoiY2xrOHZhbHFtMDdpbjNlbzVib3EzNWZ4MSJ9.cS91fXGH_gJUcL_XNx8mxw',
      container: 'map',
      style: this.style,
      zoom: 11,
      center: [this.lng, this.lat],
      attributionControl: false
    });
    this.map.addControl(this.draw, "top-right");
    //this.map.addImage("", new Image(50, 50),)

  }

}
