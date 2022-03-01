import { Component, OnInit } from '@angular/core';
import {MenuItem} from '@core/modelo/menu-item';


@Component({
  selector: 'app-locker',
  templateUrl: './locker.component.html',
  styleUrls: ['./locker.component.css']
})
export class LockerComponent implements OnInit {
  public companies: MenuItem[] = [
    { url: '/home', nombre: 'Configuración' },
    { url: '/save', nombre: 'Gestionar' }
  ];

  constructor() { }

  ngOnInit() {
  }

}
