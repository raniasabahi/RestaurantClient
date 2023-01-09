import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//import { Photo } from 'app/photo/photo';
import { photoService } from 'app/photo/photoService';
import { Resto } from 'app/resto/restaurant';
import { restaurantService } from 'app/resto/restaurantService';
import { Serie } from 'app/serie/serie';
import { serieService } from 'app/serie/serieService';
import { Ville } from 'app/ville/ville';
import { villeService } from 'app/ville/villeService';
import { Zone } from 'app/zone/zone';
import { zoneService } from 'app/zone/zoneService';
import * as Chartist from 'chartist';
import { data } from 'jquery';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  selectedVille = 0;
  selectedSerie = 0;
  selectedZone = 0;
  Restos: Resto[];
  villes: Ville[];
  zones: Zone[];
  series: Serie[];
  //photos: Photo[];
 
  handleOptionChange() {
    console.log("ville", this.selectedVille);
    this.getByVille(this.selectedVille)
}
onSubmit(){
  console.log(this.selectedZone);
  this.getByZone(this.selectedZone);

}
onSubmit2(){
  console.log(this.selectedSerie);
  this.getBySerie(this.selectedSerie);

}


  constructor(private serieService: serieService, private router: Router, private villeService: villeService, private restaurantService: restaurantService, private zoneService: zoneService, private photoService: photoService) { }
  searchText = '';

  ngOnInit() {
this.getvilles();
this.getList();
this.getListSeries();
  }



  restaurantDetails(id: number){
    this.router.navigate(['resto-details', id]);
    console.log(id);
  }


  private getvilles(){
    this.villeService.getVillesList().subscribe(data => {
      this.villes = data;
    });
  }


  private getList(){

    this.restaurantService.getRestosList().subscribe(data=>{
      this.Restos = data;
    }

    )

  }
  private getListSeries(){

    this.serieService.getSeriesList().subscribe(data=>{
      this.series = data;
    }

    )

  }


  private getByZone(zone: number){
    this.restaurantService.getByZone(zone).subscribe(data => {
        this.Restos = data;
      });
  }
  private getByVille(idVille: number){
    this.zoneService.getZoneByVille(idVille).subscribe(data => {
        this.zones = data;
      });
  }
  private getBySerie(serie: number){
  this.restaurantService.getBySerie(serie).subscribe(data => {
        this.Restos = data;
      });
  }
}
