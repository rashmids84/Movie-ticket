import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Cinema } from '../movie/movie.cinema.model';

const JSON_SERVICE = "http://localhost:3000";



@Injectable()
export class MovieService {
    constructor(private http : HttpClient) {
    }
    getCinemas(): Observable<Cinema[]> {
        return this.http.get<Cinema[]>(JSON_SERVICE + "/cinemas");
    }
    }

