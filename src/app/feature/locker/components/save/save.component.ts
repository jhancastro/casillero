import { Component, OnInit } from '@angular/core';
import { LockerService } from '@locker/shared/service/locker.service';
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
  ) { }

  async ngOnInit() {
    this.typeLocker = await this.lockerService.getCasilleros().toPromise();
    this.sencillos = await this.lockerService.getParrillaCasilleros('sencillos').toPromise();
    this.dobles = await this.lockerService.getParrillaCasilleros('dobles').toPromise();
    
  }

}
