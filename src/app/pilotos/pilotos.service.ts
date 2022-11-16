import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pilotos } from './pilotos';
import { PilCatPunt } from './pil-cat-punt/pil-cat-punt';
import { Categorias } from '../categorias-tablas/categorias';

@Injectable({
  providedIn: 'root'
})

export class PilotosService {
  private baseURL="https://back-ranking.herokuapp.com/ver/pilotos";


  private pil: Pilotos[] = [

  // { idPiloto:1,
  //   nombrePiloto:"Juan Pedro",
  //   apellidoPiloto: '',
  //   urlImgPiloto:"",
  //   puntajeAntPiloto:1,
  //   puntajeActPiloto:1
  //  },
  //  { idPiloto:2,
  //   nombrePiloto:"Alejandro Juarez",
  //   urlImgPiloto:"",
  //   puntajeAntPiloto:1,
  //   puntajeActPiloto:1
  //  },
  //  { idPiloto:3,
  //   nombrePiloto:"Facundo Chapur",
  //   urlImgPiloto:"",
  //   puntajeAntPiloto:1,
  //   puntajeActPiloto:1
  //  },
  //  { idPiloto:4,
  //   nombrePiloto:"Juan Manuel Fangio",
  //   urlImgPiloto:"",
  //   puntajeAntPiloto:1,
  //   puntajeActPiloto:1
  //  },
  // ]

  private cat: Categorias [] = [
    // {
    //   idCat:1,
    //   idCategoria:'PC B',
    //   nombreCategoria:'PC B',
    //   ponderadorCategoria: 0,
    //   linkCategoria:''
    // },
    // {
    //   idCat:2,
    //   idCategoria:'TC2000',
    //   nombreCategoria:'Turismo 2000',
    //   ponderadorCategoria: 0,
    //   linkCategoria:''
    //   },
    // {
    //   idCat:3,
    //   idCategoria:'TR',
    //   nombreCategoria:'Turismo Carretera',
    //   ponderadorCategoria: 0,
    //   linkCategoria:''
    //   },
    //   {
    //     idCat:4,
    //     idCategoria:'PC A',
    //     nombreCategoria:'PC A',
    //     ponderadorCategoria: 0,
    //     linkCategoria:''
    //   }
  ]

  // private puntosPilotos: PilCatPunt[] = [{
  //   idPilCatPunt:1,
  //   nombrePiloto: 'Juan Pedro',
  //   idCategoria: 'PC A',
  //   puntosAnteriores: 0.5,
  //   puntosActuales: 0.75
  // },
  // {
  //   idPilCatPunt:2,
  //   nombrePiloto: 'Juan Pedro',
  //   idCategoria: 'PC B',
  //   puntosAnteriores: 0.3,
  //   puntosActuales: 0.05
  // },
  // {
  //   idPilCatPunt:3,
  //   nombrePiloto: 'Juan Pedro',
  //   idCategoria: 'TC2000',
  //   puntosAnteriores: 1,
  //   puntosActuales: 1.75
  // },
  // {
  //   idPilCatPunt:4,
  //   nombrePiloto: 'Juan Pedro',
  //   idCategoria: 'TR',
  //   puntosAnteriores: 10,
  //   puntosActuales: 11.75
  // },
  // {
  //   idPilCatPunt:5,
  //   nombrePiloto: 'Facundo Chapur',
  //   idCategoria: 'PC A',
  //   puntosAnteriores: 1,
  //   puntosActuales: 1.75
  // },
  // {
  //   idPilCatPunt:6,
  //   nombrePiloto: 'Facundo Chapur',
  //   idCategoria: 'PC B',
  //   puntosAnteriores: 1,
  //   puntosActuales: 1.75
  // },
  // {
  //   idPilCatPunt:7,
  //   nombrePiloto: 'Facundo Chapur',
  //   idCategoria: 'TC2000',
  //   puntosAnteriores: 1,
  //   puntosActuales: 1.75
  // },
  // {
  //   idPilCatPunt:8,
  //   nombrePiloto: 'Facundo Chapur',
  //   idCategoria: 'TR',
  //   puntosAnteriores: 1,
  //   puntosActuales: 1.75
  // },
  // {
  //   idPilCatPunt:9,
  //   nombrePiloto: 'Alejandro Juarez',
  //   idCategoria: 'PC A',
  //   puntosAnteriores: 1,
  //   puntosActuales: 1.75
  // },
  // {
  //   idPilCatPunt:10,
  //   nombrePiloto: 'Alejandro Juarez',
  //   idCategoria:'PC B',
  //   puntosAnteriores: 1,
  //   puntosActuales: 1.75
  // },
  // {
  //   idPilCatPunt:11,
  //   nombrePiloto: 'Alejandro Juarez',
  //   idCategoria: 'TC2000',
  //   puntosAnteriores: 1,
  //   puntosActuales: 1.75
  // },
  // {
  //   idPilCatPunt:12,
  //   nombrePiloto: 'Alejandro Juarez',
  //   idCategoria: 'TR',
  //   puntosAnteriores: 1,
  //   puntosActuales: 1.75
  // },
  // {
  //   idPilCatPunt:13,
  //   nombrePiloto: 'Juan Manuel Fangio',
  //   idCategoria: 'PC A',
  //   puntosAnteriores: 1,
  //   puntosActuales: 1.75
  // },
  // {
  //   idPilCatPunt:14,
  //   nombrePiloto: 'Juan Manuel Fancio',
  //   idCategoria: 'PC B',
  //   puntosAnteriores: 1,
  //   puntosActuales: 1.75
  // },
  // {
  //   idPilCatPunt:15,
  //   nombrePiloto: 'Juan Manuel Fangio',
  //   idCategoria: 'TC2000',
  //   puntosAnteriores: 1,
  //   puntosActuales: 1.75
  // },
  // {
  //   idPilCatPunt:16,
  //   nombrePiloto: 'Juan Manuel Fangio',
  //   idCategoria: 'TR',
  //   puntosAnteriores: 1,
  //   puntosActuales: 1.75
  // },

]

  constructor(private httpClient: HttpClient) { }

  obtenerPilotos(): Observable<Pilotos[]>{
    return this.httpClient.get<Pilotos[]>(`${this.baseURL}`);
  }

  obtenerPuntosPilotos():Observable<PilCatPunt[]>{
    return this.httpClient.get<PilCatPunt[]>(`${this.baseURL}`);
  }

  obtenerCategorias():Observable<Categorias[]>{
    return this.httpClient.get<Categorias[]>(`${this.baseURL}`);
  }

}
