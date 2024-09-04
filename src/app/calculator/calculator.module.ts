import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Importar FormsModule
import { AppRoutingModule } from './app-routing.module';
import { CalculatorComponent } from './calculator.component';
//import { NavbarComponent } from '../_components/navbar/navbar.component';

@NgModule({
  declarations: [
    CalculatorComponent//,
    //NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  /*exports: [
    NavbarComponent
  ],*/
  providers: [],
  bootstrap: [CalculatorComponent]
})
export class CalculatorModule { }
