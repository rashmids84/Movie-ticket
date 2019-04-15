import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BooksRootComponent } from './app.books.component';
import { BooksService } from '../services/app.book.service';
import { CurrencyConvertorPipe } from '../pipe/app.usdToINR.pipe';
import { FormsModule } from '@angular/forms';
import { MyCustomDirectivesSharedModule } from '../directives/app.directives.module';
import { MyCustomPipesSharedModule } from '../pipe/app.pipe.module';

@NgModule({
  declarations: [
    BooksRootComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MyCustomDirectivesSharedModule,
    MyCustomPipesSharedModule
  ],
  providers: [BooksService],
  exports: [BooksRootComponent]
})
export class BooksModule { }