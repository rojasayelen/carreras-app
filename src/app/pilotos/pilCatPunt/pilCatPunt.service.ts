import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PilCatPunt } from './pilCatPunt';


@Injectable({
  providedIn: 'root'
})

export class PilCatPuntService{

  private buscaPilURL="https://back-ranking.herokuapp.com/ver/pilCatPuntXPiloto/"
  private nombrePiloto: PilCatPunt[] = [];

  constructor(private httpClient: HttpClient){}

  getPilCatPuntxPil(nombrePiloto:string):Observable<PilCatPunt[]>{
    return this.httpClient.get<PilCatPunt[]>(`${this.buscaPilURL}`+ nombrePiloto);
  }

}
