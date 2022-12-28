import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { Pilotos } from './pilotos';
import { PilotosService } from './pilotos.service';
import { PilCatPunt } from './pilCatPunt/pilCatPunt';
import { debounceTime, map, startWith } from 'rxjs/operators';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-pilotos',
  templateUrl: './pilotos.component.html',
  styleUrls: ['./pilotos.component.css'],

})
export class PilotosComponent implements OnInit {
  Subject: any;
  formatValue!: string;
  mostrar = false;

  searchColumn(value: string): void {
    console.log('value', value);
    this.traerPilCatPunt(value);
  }

  control = new FormControl();
  filPilotos!: Observable<Pilotos[]>;

  // public page!: number;

  tablaPiloto: Pilotos[] = [];
  piloto: Pilotos[] = [];
  pilu = {
    idPiloto:0,
    nombrePiloto:'',
    apellidoPiloto:'',
    urlImgPiloto:'',
    puntajeAntPiloto:0,
    puntajeActPiloto:0
 }
  puntos: PilCatPunt[] = [];
  punto = {
      idPilCatPunt:0,
      nombrePilotoPilCatPunt:'',
      idCategoriaPilCatPunt:'',
      puntosAntPilCantPunt:0,
      puntosActPilCantPunt:0,
     }

  constructor(
    private router:Router,
    private pilotoService:PilotosService) {}

  ngOnInit(): void {

  //   this.Subject.pipe(debounceTime(500))
  //   .subscribe((search: any) => {
  //     this.searchColumn(search);
  // });
    this.traerPilotos();
    this.filPilotos = this.control.valueChanges.pipe(
      debounceTime(500),
      startWith(''),
      map(value => this._filter(value)));
    }

  public traerPilotos(){
    this.pilotoService.obtenerPilotos().subscribe(dato =>{
      this.piloto = dato;
      let primerPiloto = this.piloto[0];
      this.traerPilCatPunt(primerPiloto.nombrePiloto);

    });
  }

  public traerPilCatPunt(nombre: string){
    this.pilotoService.obtenerPilCatPuntxPil(nombre).subscribe(
      (dato: PilCatPunt[]) => {this.puntos = dato;
      console.log('this.puntos', this.puntos);
      this.punto = this.puntos[0];
      })
  }

  private _filter(value:string): Pilotos[]{
    this.formatValue = value.toLocaleLowerCase();
    console.log('el valor de value ',value);
    return this.piloto.filter(value =>
      value.nombrePiloto.toLocaleLowerCase().includes(this.formatValue));

    // return this.piloto._filter(pilotoFiltrado =>
    //   pilotoFiltrado.nombrePiloto.toLocaleLowerCase()
    //   .indexOf(formatValue) === 0);
  }

  consultas: any = [
    {
      'idPiloto': 1,
      'nombrePiloto': 'Juan',
      'puntos': [
        {
          'idCategoria':1,
          'nombreCategoria': 'TR',
          'puntosActuales': 15,
          'puntosAnteriores': 0
        },
        {
          'idCategoria':2,
          'nombreCategoria': 'PC A',
          'puntosActuales': 5,
          'puntosAnteriores': 0
        },
        {
          'idCategoria':3,
          'nombreCategoria': 'PC B',
          'puntosActuales': 15,
          'puntosAnteriores': 0
        },
        {
          'idCategoria':4,
          'nombreCategoria': 'TC 2000',
          'puntosActuales': 5,
          'puntosAnteriores': 0
        }
      ]
    },
    {
      'idPiloto': 2,
      'nombrePiloto': 'Pedro',
      'puntos':[
        {
          'idCategoria':1,
          'nombreCategoria': 'TR',
          'puntosActuales': 15,
          'puntosAnteriores': 0
        },
        {
          'idCategoria':2,
          'nombreCategoria': 'PC A',
          'puntosActuales': 5,
          'puntosAnteriores': 0
        },
        {
          'idCategoria':3,
          'nombreCategoria': 'PC B',
          'puntosActuales': 15,
          'puntosAnteriores': 0
        },
        {
          'idCategoria':4,
          'nombreCategoria': 'TC 2000',
          'puntosActuales': 5,
          'puntosAnteriores': 0
        }
      ]
    },
    {
      'idPiloto': 3,
      'nombrePiloto': 'Patricia',
      'puntos': [
        {
          'idCategoria':1,
          'nombreCategoria': 'TR',
          'puntosActuales': 5,
          'puntosAnteriores': 0
        },
        {
          'idCategoria':2,
          'nombreCategoria': 'PC A',
          'puntosActuales': 51,
          'puntosAnteriores': 10
        },
        {
          'idCategoria':3,
          'nombreCategoria': 'PC B',
          'puntosActuales': 15,
          'puntosAnteriores': 10
        },
        {
          'idCategoria':4,
          'nombreCategoria': 'TC 2000',
          'puntosActuales': 25,
          'puntosAnteriores': 20
        }
      ]
    },
    {
      'idPiloto': 4,
      'nombrePiloto': 'Juan Martin',
      'puntos': [
        {
          'idCategoria':1,
          'nombreCategoria': 'TR',
          'puntosActuales': 51,
          'puntosAnteriores': 40
        },
        {
          'idCategoria':2,
          'nombreCategoria': 'PC A',
          'puntosActuales': 35,
          'puntosAnteriores': 30
        },
        {
          'idCategoria':3,
          'nombreCategoria': 'PC B',
          'puntosActuales': 150,
          'puntosAnteriores': 80
        },
        {
          'idCategoria':4,
          'nombreCategoria': 'TC 2000',
          'puntosActuales': 59,
          'puntosAnteriores': 10
        }
      ]
    }
]

  public pilotoPrevio():void {
      let datoPiloto = this.piloto.filter(item => item.nombrePiloto == this.formatValue);


      console.log('dato formatValue', this.formatValue);
      let getPiloto = datoPiloto.find(item => item.idPiloto == this.pilu.idPiloto);
      //let index = datoPiloto.findIndex(item => item == getPiloto);
      console.log('este es el dato')
      // let indexPrevio: number = index != 0 ? index -1: datoPiloto.length - 1;
      // let idPrevio: number = datoPiloto[indexPrevio].idPiloto;
      // this.pilu.idPiloto = idPrevio;
      console.log(`este es el index = ${datoPiloto}`, datoPiloto);

  }

  mostrarNoticias(){
    this.mostrar = true;
    console.log('esto es mostrar', this.mostrar);
  }
  cerrar(){
    this.mostrar=false;
    console.log('esto es cerrar desde noticias', this.mostrar);
  }
}


