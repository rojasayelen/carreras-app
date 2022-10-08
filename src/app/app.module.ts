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



const router: Routes = [
  {path:'menu', component:MenuComponent},
  {path:'noticias', component:NoticiasComponent},
  {path:'pilotos', component:PilotosComponent},
  {path:'home', component:HomeComponent},
  {path:'', redirectTo:'home', pathMatch:'full'}
];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    PilotosComponent,
    NoticiasComponent,
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
