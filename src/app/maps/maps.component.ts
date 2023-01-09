import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Photo } from 'app/photo/photo';
import { photoService } from 'app/photo/photoService';
import { Resto } from 'app/resto/restaurant';
import { restaurantService } from 'app/resto/restaurantService';
import { Ville } from 'app/ville/ville';
import { villeService } from 'app/ville/villeService';
import { Zone } from 'app/zone/zone';
import { zoneService } from 'app/zone/zoneService';

declare const google: any;

interface Marker {
lat: number;
lng: number;
label?: string;
draggable?: boolean;
}


@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {


  latitude:number;
  longitude:number;
  zoom: number;
  address: string;
  private geoCoder;

  selectedVille = 0;
  
  selectedZone = 0;
    phas: Resto[];
    pha: Resto;
    zones: Zone[];
    villes: Ville[];
    photos: Photo[];

    
    

    
  handleOptionChange() {
    console.log("ville", this.selectedVille);
    this.getByVille(this.selectedVille)
}
onSubmit(){
  console.log(this.selectedZone);
  this.getByZone(this.selectedZone);
}
  
   

  
    constructor(private restoService: restaurantService, private zoneService: zoneService, private villeService: villeService) {}
  
    ngOnInit() {
      this.getPharmacies();
      this.getUserLocation();
    }
  

    getUserLocation() {
      navigator.geolocation.getCurrentPosition(function(){
       
},function(){
       
})
   }



  private getvilles(){
    this.villeService.getVillesList().subscribe(data => {
      this.villes = data;
    });

  }

  private getByZone(zone: number){
    this.restoService.getByZone(zone).subscribe(data => {
        this.phas = data;
      });
  }

    private getByVille(idVille: number){
        this.zoneService.getZoneByVille(idVille).subscribe(data => {
            this.zones = data;
          });
      }
    public getPharmacies(): void {
      this.restoService.getRestosList().subscribe(
        (response: Resto[]) => {
          this.phas = response;
          console.log(this.phas);
        
        },
        (error: HttpErrorResponse) => {
          alert(error.message);
        }
      );
      
    }
  

    
      
      // watch visitor's location
       
      
   
  
    public onOpenModal(zone: Resto, mode: string): void {
      const container = document.getElementById("main-container");
      const button = document.createElement("button");
      button.type = "button";
      button.style.display = "none";
      button.setAttribute("data-bs-toggle", "modal");
      if (mode === "position") {
        this.pha = zone;
        var maPosition = new google.maps.LatLng(33.2474332,-8.4977671);
        var myLatlng = new google.maps.LatLng(this.pha.lat, this.pha.log);
        var mapOptions = {
          zoom: 13,
          center: myLatlng,
          scrollwheel: false, //we disable de scroll over the map, it is a really annoing when you scroll through page
          styles: [
            {
              featureType: "water",
              stylers: [
                {
                  saturation: 43,
                },
                {
                  lightness: -11,
                },
                {
                  hue: "#0088ff",
                },
              ],
            },
            {
              featureType: "road",
              elementType: "geometry.fill",
              stylers: [
                {
                  hue: "#ff0000",
                },
                {
                  saturation: -100,
                },
                {
                  lightness: 99,
                },
              ],
            },
            {
              featureType: "road",
              elementType: "geometry.stroke",
              stylers: [
                {
                  color: "#808080",
                },
                {
                  lightness: 54,
                },
              ],
            },
            {
              featureType: "landscape.man_made",
              elementType: "geometry.fill",
              stylers: [
                {
                  color: "#ece2d9",
                },
              ],
            },
            {
              featureType: "poi.park",
              elementType: "geometry.fill",
              stylers: [
                {
                  color: "#ccdca1",
                },
              ],
            },
            {
              featureType: "road",
              elementType: "labels.text.fill",
              stylers: [
                {
                  color: "#767676",
                },
              ],
            },
            {
              featureType: "road",
              elementType: "labels.text.stroke",
              stylers: [
                {
                  color: "#ffffff",
                },
              ],
            },
            {
              featureType: "poi",
              stylers: [
                {
                  visibility: "off",
                },
              ],
            },
            {
              featureType: "landscape.natural",
              elementType: "geometry.fill",
              stylers: [
                {
                  visibility: "on",
                },
                {
                  color: "#b8cb93",
                },
              ],
            },
            {
              featureType: "poi.park",
              stylers: [
                {
                  visibility: "on",
                },
              ],
            },
            {
              featureType: "poi.sports_complex",
              stylers: [
                {
                  visibility: "on",
                },
              ],
            },
            {
              featureType: "poi.medical",
              stylers: [
                {
                  visibility: "on",
                },
              ],
            },
            {
              featureType: "poi.business",
              stylers: [
                {
                  visibility: "simplified",
                },
              ],
            },
          ],
        };
        var map = new google.maps.Map(document.getElementById("map"), mapOptions);
  
        var marker = new google.maps.Marker({
          position: myLatlng,
          title: zone.nom,
        });
        var marker2 = new google.maps.Marker({
          position: maPosition,
          title: "Me",
        });
  
        // To add the marker to the map, call setMap();
        marker2.setMap(map);
        marker.setMap(map);
        button.setAttribute("data-bs-target", "#pospha");
      }
  
      if (mode === "etatp") {
        this.pha = zone;
        button.setAttribute("data-bs-target", "#etatp");
      }
  
      if (mode === "etatn") {
        this.pha = zone;
        button.setAttribute("data-bs-target", "#etatn");
      }
      if (mode === "hist") {
        button.setAttribute("data-bs-target", "#hist");
        //this.historique(this.pha);
      }
      container.appendChild(button);
      button.click();
    }

    showPosition() {
      //console.log(`Latitude: ${address.coords.latitude}, longitude: ${address.coords.longitude}`);
      var maPosition = new google.maps.LatLng(this.getUserLocation);
     
      var marker2 = new google.maps.Marker({
        position: maPosition,
        title: "Hello World!",
    
      })
      marker2.setMap(this.geoCoder);
      };
  }
 
  