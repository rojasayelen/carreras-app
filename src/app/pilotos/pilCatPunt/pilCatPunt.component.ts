import { Component, Input, Output,OnInit, EventEmitter } from '@angular/core';
import { PilCatPuntService } from './pilCatPunt.service';
import { PilCatPunt } from './pilCatPunt';
import { Router } from '@angular/router';
import { Pilotos } from '../pilotos';
import { PilotosService } from '../pilotos.service';
import { ConditionalExpr } from '@angular/compiler';
import { NumberFormatStyle } from '@angular/common';

@Component({
  selector: 'app-pilCatPunt',
  templateUrl: './pilCatPunt.component.html',
  styleUrls: ['./pilCatPunt.component.css']
})
export class PilCatPuntComponent implements OnInit {

  @Input() datoNombre: any;
  // @Output() newDatoNombre: any;
  // @Output() saludo:EventEmitter<string> = new EventEmitter<string>();

  // onNameClick(){
  //   this.saludo.emit('probando comunicación desde el hijo al padre');
  // }

  public page!: number;

  ngOnInit(): void {
    // console.log(this.datoNombre, 'datoNombre desde ngOnInit');
    // console.log('esto es dato nombre ngOnInit', this.datoNombre.nombrePiloto);
    var nombre =this.datoNombre.nombrePiloto.trim();
    this.traerPilCatPunt(nombre);

 }

  constructor(
    private pilCatPuntService: PilCatPuntService,
    private router:Router,
    private pilotoService: PilotosService) { }

    piloto: Pilotos[] = [];
    pilo: Pilotos[] = [
      {
        idPiloto: 0,
        nombrePiloto: '',
        apellidoPiloto:'',
        urlImgPiloto: '',
        puntajeAntPiloto: 0,
        puntajeActPiloto: 0,
      }
    ];

    puntos: PilCatPunt[] = [];
    pilCatPunt: PilCatPunt[]=[
      {
        idPilCatPunt:0,
        nombrePilotoPilCatPunt:"",
        idCategoriaPilCatPunt:"",
        puntosAntPilCantPunt:0,
        puntosActPilCantPunt:0,
      }
    ];

    public traerPilotos(){
      this.pilotoService.obtenerPilotos().subscribe(dato =>{
        this.piloto = dato;
      });
    }

    traerPilCatPunt(nombrePiloto:string){
      this.pilCatPuntService.obtenerPilCatPuntxPil(nombrePiloto).subscribe((
        dato: PilCatPunt[]) => {this.pilCatPunt = dato;
      })
    }

 }



