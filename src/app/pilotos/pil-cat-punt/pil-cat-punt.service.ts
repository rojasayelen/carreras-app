import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PilCatPunt } from './pil-cat-punt';


@Injectable({
  providedIn: 'root'
})

export class PilCatPuntService{
  //private baseURL="https://back-ranking.herokuapp.com/ver/pilCatPuntXPiloto";
  private baseURL="http://localhost:4200/pilotos";

  constructor(private httpClient: HttpClient){}

  obtenerPilCatPunt():Observable<PilCatPunt[]>{
    return this.httpClient.get<PilCatPunt[]>(`${this.baseURL}`);
  }
}



