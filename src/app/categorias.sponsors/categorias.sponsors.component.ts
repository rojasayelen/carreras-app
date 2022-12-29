import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-categorias.sponsors',
  templateUrl: './categorias.sponsors.component.html',
  styleUrls: ['./categorias.sponsors.component.css']
})

export class CategoriasSponsorsComponent implements OnInit {
  mostrar = false;

  constructor() {}

  ngOnInit(): void {

  }

  mostrarNoticias(){
    this.mostrar = true;
    console.log('esto es mostrar', this.mostrar);
  }
  cerrar(){
    this.mostrar=false;
    console.log('esto es cerrar desde noticias', this.mostrar);
  }

}
