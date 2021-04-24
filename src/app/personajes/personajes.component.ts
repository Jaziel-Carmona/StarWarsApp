import {Component, OnDestroy, OnInit} from '@angular/core';
import { Subscription } from 'rxjs';
import { PersonajeService } from './personajes.service';

@Component({
    selector: 'app-personajes',//<app-personajes>
    templateUrl: './personajes.component.html',
    styleUrls: ['./personajes.component.css']
})

export class PersonajesComponent implements OnInit, OnDestroy{

    activo: boolean = true;
    personajes: string[] = [];
    consultando: boolean = true;

    private personajesSubs: Subscription = new Subscription;

    constructor(private service: PersonajeService){}

    ngOnInit(){
        //this.personajes = this.service.personajes;
        this.service.fetchPersonajes();
        this.personajesSubs = this.service.personajeChange.subscribe(per => {
            this.personajes = per;
            this.consultando = false;
        });
    }

    ngOnDestroy(){
        this.personajesSubs.unsubscribe();
    }

    onRemovePersonaje(name: string){
        this.service.removePersonaje(name);
    }


    onClickActivar(){
        this.activo = !this.activo;
    }


}