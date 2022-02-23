import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrearProductoComponent } from './components/crear-producto/crear-producto.component';
import { BorrarProductoComponent } from './components/borrar-producto/borrar-producto.component';
import { LockerComponent } from './components/locker/locker.component';
import { SaveComponent } from './components/save/save.component';


const routes: Routes = [
  {
    path: '',
    component: LockerComponent,
    children: [
      {
        path: 'config',
        component: CrearProductoComponent
      },
      {
        path: 'save',
        component: SaveComponent
      },
      {
        path: 'collect',
        component: BorrarProductoComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LockersRoutingModule { }
