import { Component, Input, OnInit } from '@angular/core';
import { PilCatPuntService } from './pilCatPunt.service';
import { PilCatPunt } from './pilCatPunt';
import { Router } from '@angular/router';
import { Pilotos } from '../pilotos';
import { PilotosComponent } from '../pilotos.component';
import { PilotosService } from '../pilotos.service';

@Component({
  selector: 'app-pilCatPunt',
  templateUrl: './pilCatPunt.component.html',
  styleUrls: ['./pilCatPunt.component.css']
})
export class PilCatPuntComponent implements OnInit {

  @Input() datoNombre: any;
  nombrePil: Pilotos[] = [];

  ngOnInit(): void {
    this.traerPilotos();
 }

  constructor(
    private pilCatPuntService: PilCatPuntService,
    private router:Router,
    private pilotoService: PilotosService) { }

    cargar:boolean = true;

    piloto: Pilotos[] = [];
    pilo: Pilotos[] = [
      {
        idPiloto: 1,
        nombrePiloto: '',
        urlImgPiloto: '',
        puntajeAntPiloto: 0,
        puntajeActPiloto: 0,
      }
    ];

    puntCat: PilCatPunt[] = [
      {
        idPilCatPunt:1,
        nombrePilotoPilCatPunt:'',
        idCategoriaPilCatPunt:'',
        puntosAntPilCantPunt:0,
        puntosActPilCantPunt:0
      }
    ];

    traerPilotos(){
      this.pilotoService.obtenerPilotos().subscribe(dato =>{
        this.piloto = dato});
  }

    traerPilCatPunt(nombrePiloto: string){
      this.pilCatPuntService.getPilCatPuntxPil(nombrePiloto).subscribe((
        dato: PilCatPunt[]) => {this.datoNombre = dato}) //ver
    }

 }



