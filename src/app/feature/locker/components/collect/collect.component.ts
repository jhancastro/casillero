import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Icasilleros } from '@locker/shared/model';
import * as moment from 'moment';


@Component({
  selector: 'app-collect',
  templateUrl: './collect.component.html',
  styleUrls: ['./collect.component.css']
})
export class CollectComponent implements OnInit {
  fechaHoraFin : string;
  cobro : number;
  minutos : number;
  constructor(
    @Inject(MAT_DIALOG_DATA) public locker: Icasilleros,
  ) { }

  ngOnInit(): void {
    this.realizarCobro();
  }

  realizarCobro(){
    this.fechaHoraFin =  moment(new Date()).format('YYYY-MM-DD hh:mm:ss');
    const fecha1 = moment(this.locker.ingreso, 'YYYY-MM-DD hh:mm:ss');
    const fecha2 = moment(this.fechaHoraFin, 'YYYY-MM-DD hh:mm:ss');
    const diff = fecha2.diff(fecha1, 'm'); 
    this.minutos = diff;
    const minutosHora = 60;
    this.cobro = +((diff* +this.locker.valorHora)/minutosHora).toFixed(0);
  }
}
