import { Component } from '@angular/core';
@Component({
    selector:'app-heroe',
    templateUrl:'heroe.component.html'

})  

export class HeroeComponent{
nombre:string='Iron Man';
edad:number=40;
//metodos

get capitalizado(){
    return this.nombre.toUpperCase();
}
obtenerNombre():string{
    return `${this.nombre} - ${this.edad}`;
}
// metodos para cambiar nombre
cambiarNombre():string{
    return this.nombre="Spiderman";
}
cambiarEdad():void{
    this.edad=35;
}

}