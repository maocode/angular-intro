import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
 
})
export class ListadoComponent {
  heroes:string[]=['Spiderman','Ironman','Acuaman','Mujer Maravilla','El Chavo'];
  heroeBorrado:string='';
  //Metodos
  borrarHeroe(){
 
    this.heroeBorrado= this.heroes.shift()|| '';
    
    
  }
  

}
