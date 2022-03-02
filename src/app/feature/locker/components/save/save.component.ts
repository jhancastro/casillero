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

  constructor(
    protected lockerService : LockerService,
    public dialog: MatDialog
  ) { }

  async ngOnInit() {
    this.typeLocker = await this.lockerService.getCasilleros().toPromise();
    this.sencillos = await this.lockerService.getParrillaCasilleros('sencillos').toPromise();
    this.dobles = await this.lockerService.getParrillaCasilleros('dobles').toPromise();
    
  }

  onCollect(data: Icasilleros, tipo: string){
    if (data.estado === 'ocupado'){
          if (tipo === 'sencillo'){
            let locker = this.typeLocker.filter(r=>r.tipo==='sencillo');
            data.valorHora = locker[0].valorHora;
          }else{
            let locker = this.typeLocker.filter(r=>r.tipo==='doble');
            data.valorHora = locker[0].valorHora;
          }
            const winCollect = this.dialog.open(CollectComponent, {
              data:  data,
              disableClose: false, height:'60%',width:'35%'
            });
            winCollect.afterClosed().subscribe(result => {
              if (result?.length === 0) {
                return;
              }
              });
    }else{
      return;
    }
  }

}
