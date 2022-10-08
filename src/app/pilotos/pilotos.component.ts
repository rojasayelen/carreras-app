import { Component, OnInit } from '@angular/core';
import { Pilotos } from './pilotos';
import { Router } from '@angular/router';
import { PilotosService } from './pilotos.service';

@Component({
  selector: 'app-pilotos',
  templateUrl: './pilotos.component.html',
  styleUrls: ['./pilotos.component.css']
})
export class PilotosComponent implements OnInit {
  pages: number = 1;
  pilot: Pilotos[] = []

  constructor() { }

  ngOnInit(): void {
  }

}
