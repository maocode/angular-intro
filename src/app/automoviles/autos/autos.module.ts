import { NgModule } from '@angular/core';
import { AutosComponent } from './autos.component';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations:[
        AutosComponent],
        exports:[
            AutosComponent
        ],
        imports:[
            CommonModule
        ]

})
export class AutosModule{

}