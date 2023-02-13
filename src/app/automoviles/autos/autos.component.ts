import {Component} from '@angular/core';

@Component({
    selector:'app-autos',
    template:`
    <h1>Listado de veiculos</h1>
    
  
        <ul>
        <li *ngFor="let auto of autos">
               {{auto}}
            </li>
        </ul>
    
    
    `
})

export class AutosComponent{
    autos:string[]=['Ford','Mazda','Renaut'];

}