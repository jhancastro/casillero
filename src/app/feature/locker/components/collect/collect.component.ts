import { Component, Inject, OnInit } from '@angular/core';
import {  MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
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
  minutosHora : number;
  flagfree? : boolean;
  constructor(
    @Inject(MAT_DIALOG_DATA) public locker: Icasilleros,
    public dialogRef: MatDialogRef<CollectComponent>,
  ) {}

  ngOnInit() {
    this.flagfree = this.locker.estado ==='libre'?true:false; 
    this.flagfree = true;
      if (!this.flagfree){
        this.realizarCobro();
      }else{
        this.realizarAsignacion();
      }
  }

  realizarCobro(){
    this.fechaHoraFin =  moment(new Date()).format('YYYY-MM-DD hh:mm:ss');
    const fecha1 = moment(this.locker.ingreso, 'YYYY-MM-DD hh:mm:ss');
    const fecha2 = moment(this.fechaHoraFin, 'YYYY-MM-DD hh:mm:ss');
    const diff = fecha2.diff(fecha1, 'm'); 
    this.minutos = diff;
    this.minutosHora = 60;
    this.cobro = +((diff* +this.locker.valorHora)/this.minutosHora).toFixed(0);
  }

  realizarAsignacion(){
    this.locker.ingreso =  moment(new Date()).format('YYYY-MM-DD hh:mm:ss');
    this.minutos = 0;
    this.cobro = 0;
  }

  closeModal(){
    this.dialogRef.close(this.locker);
  }
}
