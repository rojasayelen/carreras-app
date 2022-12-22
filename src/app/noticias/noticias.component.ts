import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { NoticiasService } from './noticias.service';
import { Noticias } from './noticias';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})
export class NoticiasComponent implements OnInit {

  constructor(
    private router: Router,
    private noticiasService: NoticiasService
  ) { }

  ngOnInit(): void {
  }

  noticia: Noticias[] = [];

  public verNoticias(){
    this.noticiasService.obtenerNoticias().subscribe(
      (dato => {
        this.noticia = dato;
        let primeraNoticia = this.noticia[0];

      })
    )
  }
}
