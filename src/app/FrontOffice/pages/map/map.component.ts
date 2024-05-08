import {Component, Input, OnInit} from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import * as MapboxDraw from '@mapbox/mapbox-gl-draw';
import { Output, EventEmitter } from '@angular/core';
import {Data, Router} from "@angular/router";
import {FormBuilder} from "@angular/forms";
import {DataService} from "../../services/data.service";
import {JourneyService} from "../../services/journey.service";

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

  @Input() traject = [];

  @Output() newItemEvent = new EventEmitter<any>();

  location={
    latitude : 0,
    longitude : 0,
    nameLocation : ""
  }
  @Input() state!: boolean;
  fields:any = [];

  constructor(private dataService: DataService,private journeyService: JourneyService,private router:Router,private formBuilder:FormBuilder) {


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
      center: [this.lng, this.lat],
    });

    this.dataService.getLocation().subscribe(location => {
      this.addIcon('https://upload.wikimedia.org/wikipedia/commons/e/e6/Home_icon_black.png',location.longitude,location.latitude,'home')
      this.addIcon('https://upload.wikimedia.org/wikipedia/commons/f/ff/Logo_ESPRIT_Ariana.jpg',10.189594038169787 ,36.89885213762284,"esprit")
      let traject=[];
      for(let route of this.journeyService.selectedJourney.traject)
        traject.push([route.longitude,route.latitude])
      this.draw.add({ type: 'LineString', coordinates: traject});
    });

    this.map.addControl(this.draw);

    this.map.addLayer({
      'id': 'points',
      'type': 'symbol',
      'source': 'point', // reference the data source
      'layout': {
        'icon-image': 'icon', // reference the image
        'icon-size': 0.25
      }
    });




  }


  addIcon(url:any,longitude:any,latitude:any,nameImg:any){
    this.map?.loadImage(
        url,
        (error, image) => {
          if (error) throw error;

          // Add the image to the map style.
          this.map?.addImage(nameImg, image!);

          // Add a data source containing one point feature.
          this.map?.addSource('point', {
            'type': 'geojson',
            'data': {
              'type': 'FeatureCollection',
              'features': <any>[
                {
                  'type': 'Feature',
                  'geometry': {
                    'type': 'MultiPoint',
                    'coordinates': [[longitude, latitude],[longitude+0.01, latitude+1]]
                  }
                }
              ]
            }
          });

          // Add a layer to use the image to represent the data.
          this.map?.addLayer({
            'id': 'points',
            'type': 'symbol',
            'source': 'point', // reference the data source
            'layout': {
              'icon-image': nameImg, // reference the image
              'icon-size': 0.25
            }
          });}
      );
  }



}
