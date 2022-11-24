import { Component, Input, OnInit } from '@angular/core';
import { PilCatPuntService } from './pilCatPunt.service';
import { PilCatPunt } from './pilCatPunt';
import { Router } from '@angular/router';
import { Pilotos } from '../pilotos';
import { PilotosService } from '../pilotos.service';

@Component({
  selector: 'app-pilCatPunt',
  templateUrl: './pilCatPunt.component.html',
  styleUrls: ['./pilCatPunt.component.css']
})
export class PilCatPuntComponent implements OnInit {

  @Input() datoNombre: any;

  ngOnInit(): void {
    console.log('esto es dato nombre ngOnInit', this.datoNombre.nombrePilotoPilCatPunt);
    this.traerPilCatPunt(this.datoNombre.nombrePilotoPilCatPunt);

 }

  constructor(
    private pilCatPuntService: PilCatPuntService,
    private router:Router,
    private pilotoService: PilotosService) { }

    piloto: Pilotos[] = [];
    pilo: Pilotos[] = [
      {
        idPiloto: 1,
        nombrePiloto: '',
        apellidoPiloto:'',
        urlImgPiloto: '',
        puntajeAntPiloto: 0,
        puntajeActPiloto: 0,
      }
    ];

    punto: PilCatPunt[] = [];
    pilCatPunt :PilCatPunt[]=[ {
      idPilCatPunt:1,
      nombrePilotoPilCatPunt:"asdfasdfadgfadfas",
      idCategoriaPilCatPunt:"",
      puntosAntPilCantPunt:1,
      puntosActPilCantPunt:1,
    }];

    traerPilCatPunt(nombrePiloto:string){
      nombrePiloto = '';
      this.pilCatPuntService.obtenerPilCatPuntxPil(nombrePiloto).subscribe((
        dato: PilCatPunt[]) => {this.pilCatPunt = dato;
        console.log('este es el dato', this.pilCatPunt[1], nombrePiloto);

        }) //ver
    }

 }



