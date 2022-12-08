import { Component, Input, Output,OnInit } from '@angular/core';
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
  @Output() newDatoNombre: any;


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

    public traerPilotos(){//ok
      this.pilotoService.obtenerPilotos().subscribe(dato =>{this.piloto = dato});
    }

    traerPilCatPunt(nombrePiloto:string){

      this.pilCatPuntService.obtenerPilCatPuntxPil(nombrePiloto).subscribe((
        dato: PilCatPunt[]) => {this.pilCatPunt = dato;
          // console.log(this.pilCatPunt, 'esto es el dato')
        // let categAr = [''];
        // let puntosAr = [''];

          // for(let dato of this.pilCatPunt){
          //   // console.log(dato, 'dato del for');
          //   const categorias = categAr.push(this.datoNombre.idCategoriaPilCatPunt);
          //   const puntos = puntosAr.push(this.datoNombre.puntajeActPiloto);
          //   console.log(categorias, puntos,  'categorias y puntos despues del push')
          // }
          //console.log(categAr[0], puntosAr[0], 'arrays');



        // for(let i=0; i<= 1000; i++){
        //   categArray[i] = this.datoNombre.idCategoriaPilCatPunt;
        //   puntosArray[i] = this.datoNombre.puntajeActPiloto;
        //   console.log(categArray[0], puntosArray[0]);
        // }

      })
    }
    // consulta(){
    //   const categArray = [];
    //   const puntosArray = [];
    //   for(let i=0; i<= this.pilCatPunt.length; i++){
    //     categArray[i] = this.pilCatPunt;
    //     puntosArray[i] = this.pilCatPunt;
    //   }
    // }

 }



