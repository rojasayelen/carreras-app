import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Categoria } from '../interfaces/categoria';


@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  private url = "https://complete-audry-privas06.koyeb.app/ver/categorias";

  private categorias: Categoria[] = [
    {
      idCat: 1,
      idCategoria: "TC",
      nombreCategoria: "Turismo Carretera",
      ponderadorCategoria: 0.5,
      linkCategoria: "http://www.tc-auto.com.ar"
    },
    {
      idCat: 2,
      idCategoria: "TC 2000",
      nombreCategoria: "Turismo Carretera 2000",
      ponderadorCategoria: 1,
      linkCategoria: "http://www.tc-auto.com.ar"
    },
    {
      idCat: 3,
      idCategoria: "TN",
      nombreCategoria: "Turismo Nacional",
      ponderadorCategoria: 0.9,
      linkCategoria: "http://www.tc-auto.com.ar"
    },
  ];

  constructor(private http: HttpClient) { }

  obtenerCategorias(){
    return this.http.get<Categoria[]>(`${this.url}`);
  }
}
