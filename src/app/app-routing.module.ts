import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PilotosComponent } from './pilotos/pilotos.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { NoticiasComponent } from './noticias/noticias.component';

const routes: Routes = [
  {path:'menu', component:MenuComponent},
  {path:'pilotos', component:PilotosComponent},
  {path:'home', component:HomeComponent},
  {path:'noticias', component:NoticiasComponent},
  {path:'', redirectTo:'home', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
