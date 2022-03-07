import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LockerService } from '@locker/shared/service/locker.service';
import { CollectComponent } from '../collect/collect.component';
import { Icasilleros, ItipoCasilleros }  from './../../shared/model';

@Component({
  templateUrl: './save.component.html',
  styleUrls: ['./save.component.css']
})
export class SaveComponent implements OnInit {
  typeLocker : ItipoCasilleros[];
  sencillos : Icasilleros[];
  dobles : Icasilleros[];
  filterLocker : ItipoCasilleros[];

  constructor(
    public lockerService : LockerService,
    public dialog: MatDialog
  ) { }

  async ngOnInit() {
    this.onchargueData();

   }

    onchargueData(){
    this.lockerService.getCasilleros().subscribe(
      type => this.typeLocker = type
    )
    
    this.lockerService.getParrillaCasilleros('sencillos').subscribe(
      sencillos => this.sencillos = sencillos      
    )
    this.lockerService.getParrillaCasilleros('dobles').subscribe(
      dobles => this.dobles = dobles
    )
   }

  onCollect(data: Icasilleros, tipo: string){
    if (data.estado === 'ocupado'){
          if (tipo === 'sencillo'){
            this.filterLocker = this.typeLocker.filter(r=>r.tipo==='sencillo');
            data.valorHora = this.filterLocker[0].valorHora;
          }else{
            this.filterLocker = this.typeLocker.filter(r=>r.tipo==='doble');
            data.valorHora = this.filterLocker[0].valorHora;
          }
            const winCollect = this.dialog.open(
              CollectComponent,
              { data,
              disableClose: false, height:'60%',width:'35%'
              }
            );
            winCollect.afterClosed()
            .subscribe();

    }
  }
}
