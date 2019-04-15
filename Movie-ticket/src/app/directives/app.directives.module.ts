import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ValidateInputDirective } from './app.attr.dir.inputColor';
import { MyCustomEmailValidator } from './app.email.validate.directive';

@NgModule({
  declarations: [
    ValidateInputDirective,  MyCustomEmailValidator
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  exports: [ValidateInputDirective ,  MyCustomEmailValidator]
})
export class MyCustomDirectivesSharedModule { }