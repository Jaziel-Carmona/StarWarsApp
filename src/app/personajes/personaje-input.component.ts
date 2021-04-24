import {Component, EventEmitter, Output} from '@angular/core';
import { PersonajeService } from './personajes.service';

@Component({
    selector: 'app-personaje-input',
    templateUrl: 'personaje-input.component.html',
    styleUrls: ['personaje-input.component.css']
})

export class PersonajeInputComponent{

    nombre: string = '';

    constructor(private service: PersonajeService){}

    alta(){
        this.service.addPersonaje(this.nombre);
        this.nombre = '';
    }
}