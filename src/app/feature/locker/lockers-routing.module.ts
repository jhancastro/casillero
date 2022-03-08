import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SecurityGuard } from '@core/guard/security.guard';
import { HomeComponent } from '@home/home.component';
import { LockerComponent } from './components/locker/locker.component';
import { SaveComponent } from './components/save/save.component';


export const routes: Routes = [
  {
    path: '',
    component: LockerComponent,
    children: [
      {
        path: 'save',
        component: SaveComponent
      },
      
    ]
  },
  { path: 'home', component: HomeComponent, canActivate: [SecurityGuard]  },
  { path: 'login', loadChildren: () => import('./../login/login/login.module').then(m => m.LoginModule) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LockersRoutingModule { }
