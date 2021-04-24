import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { PersonajeInputComponent } from './personajes/personaje-input.component';
import { PersonajesComponent } from './personajes/personajes.component';

const routes: Routes = [
    {path: '', component: PersonajesComponent},
    {path: 'input', component: PersonajeInputComponent},
];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule{

}
