import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { Pilotos } from './pilotos';
import { PilotosService } from './pilotos.service';
import { Categorias } from '../categorias-tablas/categorias';
import { CategoriasService } from '../categorias-tablas/categorias.service'
import { PilCatPunt } from './pil-cat-punt/pil-cat-punt';
import { PilCatPuntService } from './pil-cat-punt/pil-cat-punt.service';




@Component({
  selector: 'app-pilotos',
  templateUrl: './pilotos.component.html',
  styleUrls: ['./pilotos.component.css'],
  providers: [ PilotosService] //video
})
export class PilotosComponent implements OnInit {
  public selectedPiloto: Pilotos = {idPiloto : 0, nombrePiloto: '', urlImgPiloto: '', puntajeAntPiloto: 0, puntajeActPiloto: 0 }

  pages: number = 1;

  public pilot: Pilotos[] = []

  public cate: Categorias[] = []

  public punto: PilCatPunt[] = []

  constructor(
    private pilotServicio:PilotosService,
    private router:Router,
    private categoriaService: CategoriasService,
    private pilcatpuntService: PilCatPuntService ) {}


  ngOnInit(): void {
    this.traerPilotos();
    this.traerCategorias();
    this.traerPuntosPilotos();
  }

  pil = {
    idPiloto:1,
    nombrePiloto:" ",
    urlImgPiloto:" ",
    puntajeAntPiloto:1,
    puntajeActPiloto:1
  }

  cat = {
    idCat:1,
    idCategoria:'',
    nombreCategoria:'',
    ponderadorCategoria: 0,
    linkCategoria:''
  }

  pilCatPunt = {
    idPilCatPunt:1,
    nombrePiloto: '',
    idCategoria: '',
    puntosAnteriores: 0,
    puntosActuales: 0
  }

  public traerPilotos(){
    this.pilotServicio.obtenerPilotos().subscribe(dato =>{this.pilot = dato});
  }
  public traerCategorias(){
    this.categoriaService.obtenerCategorias().subscribe(dato =>{this.cate = dato});
  }
  public traerPuntosPilotos(){
    this.pilcatpuntService.obtenerPilCatPunt().subscribe(dato =>{this.pilCatPunt});
  }
}
