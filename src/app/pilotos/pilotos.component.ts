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

  onNameClick(message: string){
    console.log(message);
  }
  verSelect:boolean=true;
  ver:boolean=false;

  public page!: number;

  pilu = {
    idPiloto:0,
    nombrePiloto:'',
    apellidoPiloto:'',
    urlImgPiloto:'',
    puntajeAntPiloto:0,
    puntajeActPiloto:0
 }

  piloto: Pilotos[] = [];

  constructor(
    private pilotoService:PilotosService,
    private router:Router,
    private pilcatpuntService: PilCatPuntService ) {}

  ngOnInit(): void {
    this.traerPilotos();
  }

  public traerPilotos(){
    this.pilotoService.obtenerPilotos().subscribe(dato =>{this.piloto = dato});
  }

  elegir(pil: Pilotos){
    let datoNombre = {};
    let datoPuntajeAnterior = {};
    let datoPuntajeActual = {};
    datoNombre = this.pilu;
    datoPuntajeAnterior = this.pilu.puntajeAntPiloto;
    datoPuntajeActual = this.pilu.puntajeActPiloto;
    console.log('puntos actuales', datoPuntajeActual);
    console.log('puntaje anterior', datoPuntajeAnterior);
    this.ver = true;
    this.verSelect = false;
  }

  reload(){
    window.location.reload();
  }

  // pilotoPrevio(): void{
  //   this.pilotoService.obtenerPilotos().subscribe(dato => {
  //     let datoPiloto = dato.filter(item => item.nombrePiloto == this.pilu.nombrePiloto);
  //     // let getPiloto = datoPiloto.find(item => item.idPiloto == this.pilu.idPiloto);
  //     let index = datoPiloto.findIndex(item => item == this.pilu);
  //     let indexPrevio: number = index != 0 ? index -1 : datoPiloto.length - 1;
  //     // let idPrevio: number = datoPiloto[indexPrevio].idPiloto;
  //     // this.pilu.idPiloto = idPrevio;
  //     console.log(`este es el index = ${index}`, index);
  //     });
  // }
}
