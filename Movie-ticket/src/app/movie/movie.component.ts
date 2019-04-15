import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/app.movie.service';
import { Cinema } from './movie.cinema.model';
//import { ComponentFactoryResolver } from "@angular/core/src/render3";
import { ActivatedRoute, Router } from "@angular/router";


@Component({
  selector: 'MovieComponent',
  templateUrl: './app.movie.component.html',
  styleUrls: ['./app.movie.css']
})
export class MovieComponent implements OnInit  {

  
    myCinemas: Cinema[] = [];

    constructor(private movieService : MovieService ,private routingService : ActivatedRoute, private routerService : Router) {
      


     }

    ngOnInit(): void {
        this.movieService.getCinemas().subscribe(
          (cinemasFromDB: Cinema[]) => {
         this.myCinemas = cinemasFromDB;
         
         })
         //navigateToLoginPage() {
        //  this.routerService.navigate(["/Login"]) ;
    }
//}
    
  } 