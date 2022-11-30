import { Component, OnInit, Output } from '@angular/core';

import { Router } from '@angular/router';
import { Pilotos } from './pilotos';
import { PilotosService } from './pilotos.service';

import { PilCatPunt } from './pilCatPunt/pilCatPunt';
import { PilCatPuntComponent } from './pilCatPunt/pilCatPunt.component';
import { PilCatPuntService } from './pilCatPunt/pilCatPunt.service';
import { FormRecord } from '@angular/forms';


@Component({
  selector: 'app-pilotos',
  templateUrl: './pilotos.component.html',
  styleUrls: ['./pilotos.component.css'],

})
export class PilotosComponent implements OnInit {

  verSelect:boolean=true;
  ver:boolean=false;

  pilu = {
    idPiloto:0,
    nombrePiloto:'',
    apellidoPiloto:'',
    urlImgPiloto:'',
    puntajeAntPiloto:0,
    puntajeActPiloto:0
 }

  piloto: Pilotos[] = []; //ok

  constructor(
    private pilotoService:PilotosService,
    private router:Router,
    private pilcatpuntService: PilCatPuntService ) {}

  ngOnInit(): void {
    this.traerPilotos();
  }

  public traerPilotos(){//ok
    this.pilotoService.obtenerPilotos().subscribe(dato =>{this.piloto = dato});
  }

  elegir(pil: Pilotos){ //ok
    const datoNombre = this.pilu;
    this.ver = true;
    this.verSelect = false;
  }

}
