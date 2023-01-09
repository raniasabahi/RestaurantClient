import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Resto } from '../resto/restaurant';
import { restaurantService } from '../resto/restaurantService';

declare const google: any;

interface Marker {
lat: number;
long: number;
label?: string;
draggable?: boolean;
}
@Component({
  selector: 'app-Resto-details',
  templateUrl: './Resto-details.component.html',
  styleUrls: ['./Resto-details.component.css']
})
export class RestoDetailsComponent implements OnInit {

  id: number
  Resto: Resto
  constructor(private route: ActivatedRoute, private RestoService: restaurantService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.Resto = new Resto();
    this.RestoService.getRestoById(this.id).subscribe( data => {
      this.Resto = data;
    });


  

}


}
