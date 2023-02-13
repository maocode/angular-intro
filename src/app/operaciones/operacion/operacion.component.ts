import { Component } from '@angular/core';


@Component({
    selector:'app-operacionmate',
    templateUrl:'operacion.component.html'


})
export  class OperacionMatematica{
    numerouno:number=5;
    numerodos:number=7;
    //metodos
    suma(){
        return this.numerouno+this.numerodos;
    }

}