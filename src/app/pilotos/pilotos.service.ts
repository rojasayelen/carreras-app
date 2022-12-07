import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Pilotos } from './pilotos';
import { PilCatPunt } from './pilCatPunt/pilCatPunt';

@Injectable({
  providedIn: 'root'
})

export class PilotosService {
  private baseURL="https://complete-audry-privas06.koyeb.app/ver/pilotos";


  private pilotos: Pilotos[] = []
  private puntosPilotos: PilCatPunt[] = []

  constructor(private httpClient: HttpClient) { }

  obtenerPilotos(): Observable<Pilotos[]>{
    return this.httpClient.get<Pilotos[]>(`${this.baseURL}`);
  }

}
