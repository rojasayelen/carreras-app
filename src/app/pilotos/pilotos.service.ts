import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Pilotos } from './pilotos';
import { PilCatPunt } from './pilCatPunt/pilCatPunt';

@Injectable({
  providedIn: 'root'
})

export class PilotosService {
  private baseURL="https://back-ranking.herokuapp.com/ver/pilotos";


  private pilotos: Pilotos[] = []
  private puntosPilotos: PilCatPunt[] = []

  constructor(private httpClient: HttpClient) { }

  obtenerPilotos(): Observable<Pilotos[]>{
    return this.httpClient.get<Pilotos[]>(`${this.baseURL}`);
  }

}
