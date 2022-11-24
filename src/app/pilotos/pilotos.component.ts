import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { Pilotos } from './pilotos';
import { PilotosService } from './pilotos.service';

import { PilCatPunt } from './pilCatPunt/pilCatPunt';
import { PilCatPuntComponent } from './pilCatPunt/pilCatPunt.component';
import { PilCatPuntService } from './pilCatPunt/pilCatPunt.service';


@Component({
  selector: 'app-pilotos',
  templateUrl: './pilotos.component.html',
  styleUrls: ['./pilotos.component.css'],

})
export class PilotosComponent implements OnInit {


  ver:boolean=false;
  // piluh:PilCatPuntComponent[] = [];

  pilu: Pilotos = {
    idPiloto:0,
    nombrePiloto:'',
    apellidoPiloto:'',
    urlImgPiloto:'',
    puntajeAntPiloto:0,
    puntajeActPiloto:0
 }

  // selectedPiloto: Pilotos = {
  //    idPiloto:0,
  //    nombrePiloto:'',
  //    apellidoPiloto:'',
  //    urlImgPiloto:'',
  //    puntajeAntPiloto:0,
  //    puntajeActPiloto:0
  // }
  piloto: Pilotos[] = []; //ok
  selectedPuntos: PilCatPunt = new PilCatPunt;

  // puntos: PilCatPunt[] = [];

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
    console.log(datoNombre, 'datoNombre de Elegir');
    this.ver = true;
    console.log('entra en elegir', this.ver)
  }




}
