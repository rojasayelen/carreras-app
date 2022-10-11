import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PilotosComponent } from './pilotos/pilotos.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { RankingSponsorsComponent } from './ranking.sponsors/ranking.sponsors.component';
import { RankingTablaComponent } from './ranking.tabla/ranking.tabla.component';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'ranking', component:RankingSponsorsComponent},
  {path:'ranking-tabla', component:RankingTablaComponent},
  {path:'pilotos', component:PilotosComponent},
  {path:'menu', component:MenuComponent},
  //TODO: Categorias
  {path:'noticias', component:NoticiasComponent},
  {path:'', redirectTo:'home', pathMatch:'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
