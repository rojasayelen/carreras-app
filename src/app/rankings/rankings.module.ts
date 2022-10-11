import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RankingBComponent } from './ranking-b/ranking-b.component';
import { RankingAComponent } from './ranking-a/ranking-a.component';



@NgModule({
  declarations: [
    RankingAComponent,
    RankingBComponent
  ],
  exports: [
    RankingAComponent,
    RankingBComponent
  ],
  imports: [
    CommonModule
  ]

})

export class RankingsModule { }
