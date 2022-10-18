import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pilotos } from './pilotos';

@Injectable({
  providedIn: 'root'
})

export class PilotosService {

  private baseURL="https://back-ranking.herokuapp.com/ver/pilotos";

  // private baseURL="http://localhost:4200/ver/pilotos";


  pilot = {
    idPiloto:1,
    nombrePiloto:" ",
    apellidoPiloto:" ",
    urlImgPiloto:" ",
    puntajeAntPiloto:1,
    puntajeActPiloto:1
  }

  constructor(private httpClient :HttpClient) { }

  obtenerPilotos():Observable<Pilotos[]>{
    return this.httpClient.get<Pilotos[]>(`${this.baseURL}`);
  }
}
