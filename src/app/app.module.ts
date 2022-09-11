import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';

import { RouterModule, Routes } from '@angular/router';


import { HomeComponent } from './home/home.component';

import { MenuComponent } from './menu/menu.component';

import { PilotosComponent } from './pilotos/pilotos.component';



const router: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'pilotos',
    component: PilotosComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    PilotosComponent
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
