import { Component, OnInit } from '@angular/core';
import {MenuItem} from '@core/modelo/menu-item';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public companies: MenuItem[] = [
    { url: '/config', nombre: 'Configuración' },
    { url: '/save', nombre: 'Gestionar' }
  ];

  constructor() { }

  ngOnInit() {
  }

}
