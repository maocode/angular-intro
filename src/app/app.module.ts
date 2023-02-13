import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';


import { OperacionMatematica } from './operaciones/operacion/operacion.component';
import { HeroesModule } from './heroes/heroes.module';
import { ContadorModule } from './contador/contador/contador.module';
import { AutosModule } from './automoviles/autos/autos.module';




@NgModule({
  declarations: [
    AppComponent,
         
    OperacionMatematica
    
  ],
  imports: [
    BrowserModule,
    HeroesModule,
    ContadorModule,
    AutosModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
