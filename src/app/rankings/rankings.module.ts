import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RankingAComponent } from './ranking-a/ranking-a.component';
import { RankingBComponent } from './ranking-b/ranking-b.component';




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
