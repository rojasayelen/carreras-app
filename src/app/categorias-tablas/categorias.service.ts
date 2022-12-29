import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categorias } from './categorias';


@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  private baseURL="https://complete-audry-privas06.koyeb.app/ver/categorias";


  categoria = {
    idCat:1,
    idCategoria:" ",
    nombreCategoria:" ",
    ponderadorCategoria: 0,
    linkCategoria:" ",
  }
  private cat: Categorias [] = []

  constructor(private httpClient: HttpClient) { }

  obtenerCategorias():Observable<Categorias[]>{
    return this.httpClient.get<Categorias[]>(`${this.baseURL}`);
  }

}
