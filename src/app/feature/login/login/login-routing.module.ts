import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './login.component';
import {SecurityGuard} from '@core/guard/security.guard';

const routes: Routes = [
  { path: '', component: LoginComponent, canActivate: [SecurityGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
