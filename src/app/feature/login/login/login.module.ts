import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import {ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '@shared/shared.module';
import {CoreModule} from '@core/core.module';
import {LoginService} from './shared/login/login.service';
import {HomeComponent} from '@home/home.component';


@NgModule({
  declarations: [
    LoginComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    CoreModule
  ],
  providers:[
    {
      provide: LoginService
    },
  ]
})
export class LoginModule { }
