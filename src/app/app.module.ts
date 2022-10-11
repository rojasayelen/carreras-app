import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';

import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { PilotosComponent } from './pilotos/pilotos.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { RankingSponsorsComponent } from './ranking.sponsors/ranking.sponsors.component';
import { RankingTablaComponent } from './ranking.tabla/ranking.tabla.component';

const router: Routes = [
  {path:'home', component:HomeComponent},
  {path:'ranking', component:RankingSponsorsComponent},
  {path:'ranking-tabla', component:RankingTablaComponent},
  {path:'pilotos', component:PilotosComponent},
  {path:'categorias', component:CategoriasComponent},
  {path:'noticias', component:NoticiasComponent},
  {path:'menu', component:MenuComponent},
  {path:'', redirectTo:'home', pathMatch:'full'}
];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    PilotosComponent,
    NoticiasComponent,
    CategoriasComponent,
    RankingSponsorsComponent,
    RankingTablaComponent,
    ],
  imports: [
    BrowserModule,
    MatSliderModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(router)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
