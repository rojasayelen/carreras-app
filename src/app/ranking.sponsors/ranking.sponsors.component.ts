import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ranking.sponsors',
  templateUrl: './ranking.sponsors.component.html',
  styleUrls: ['./ranking.sponsors.component.css']
})
export class RankingSponsorsComponent implements OnInit {
  mostrar = false;
  constructor() { }

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
