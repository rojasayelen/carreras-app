import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PilotosComponent } from './pilotos/pilotos.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { RankingAComponent } from './rankings/ranking-a/ranking-a.component';
import { RankingBComponent } from './rankings/ranking-b/ranking-b.component';
import { RankingsModule } from './rankings/rankings.module';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'ranking', loadChildren: () => import('./rankings/rankings.module').then(m => m.RankingsModule)},
  {path:'pilotos', component:PilotosComponent},
  {path:'menu', component:MenuComponent},
  //TODO: Categorias
  {path:'noticias', component:NoticiasComponent},
  {path:'', redirectTo:'home', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
