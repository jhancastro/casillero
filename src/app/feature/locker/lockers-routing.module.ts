import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LockerComponent } from './components/locker/locker.component';
import { SaveComponent } from './components/save/save.component';


const routes: Routes = [
  {
    path: '',
    component: LockerComponent,
    children: [
      {
        path: 'save',
        component: SaveComponent
      },
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LockersRoutingModule { }
