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

  mostrarNoticias(){
    this.mostrar = true;
    console.log('esto es mostrar', this.mostrar);
  }

  cerrar(){
    this.mostrar = false;
    console.log('esto es cerrar desde noticias', this.mostrar);
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
  }

  public pilotoPrevio(value: string):void {
    let namePiloto = this.piloto.findIndex(item => item.nombrePiloto);

  }

}


