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

  cargar:boolean=true;
  selectedPiloto: Pilotos = new Pilotos();
  piloto: Pilotos[] = [];
  selectedPuntos: PilCatPunt = new PilCatPunt();
  puntos: PilCatPunt[] = [];

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

  public traerPilCatPuntxPil(nombrePiloto: string){
    this.pilcatpuntService.getPilCatPuntxPil(nombrePiloto).subscribe(dato =>{this.puntos = dato});
  }

  public elegir(pil: Pilotos){
    this.selectedPiloto.nombrePiloto = pil.nombrePiloto
    const datoNombre = this.selectedPiloto;
    this.cargar = true;
  }



}
