import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { MovieService } from '../services/app.movie.service';
import {MovieComponent} from './movie.component';

//Decorator
@NgModule({
    declarations:[
        MovieComponent
    ],
    imports: [
        FormsModule,
        BrowserModule
        
    
    ],
    providers:[MovieService],
    exports:[MovieComponent]
})

export class MovieModule {

} 