import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './login.component';
import {SecurityGuard} from '@core/guard/security.guard';
import { HomeComponent } from '@home/home.component';

export const routes: Routes = [
  { path: '', component: LoginComponent, canActivate: [SecurityGuard] },
  { path: 'home', component: HomeComponent, canActivate: [SecurityGuard]  },
  { path: 'login', loadChildren: () => import('././login.module').then(m => m.LoginModule) },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
