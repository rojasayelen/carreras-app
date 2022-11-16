import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categorias } from './categorias';


@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  //private baseURL="https://back-ranking.herokuapp.com/ver/categorias";


  // cat = {
  //   idCat:1,
  //   idCategoria:" ",
  //   nombreCategoria:" ",
  //   ponderadorCategoria: 0,
  //   linkCategoria:" ",
  // }
  private cat: Categorias [] = [
    {
      idCat:1,
      idCategoria:'PC B',
      nombreCategoria:'PC B',
      ponderadorCategoria: 0,
      linkCategoria:''
    },
    {
      idCat:2,
      idCategoria:'TC2000',
      nombreCategoria:'Turismo 2000',
      ponderadorCategoria: 0,
      linkCategoria:''
      },
    {
      idCat:3,
      idCategoria:'TR',
      nombreCategoria:'Turismo Carretera',
      ponderadorCategoria: 0,
      linkCategoria:''
      },
      {
        idCat:4,
        idCategoria:'PC A',
        nombreCategoria:'PC A',
        ponderadorCategoria: 0,
        linkCategoria:''
      }
  ]

  constructor(private httpClient: HttpClient) { }

  obtenerCategorias():Observable<Categorias[]>{
    return this.httpClient.get<Categorias[]>(`${this.}`);
  }

}
