import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SecurityGuard } from '@core/guard/security.guard';
import { HomeComponent } from '@home/home.component';


const routes: Routes = [
   { path: '', redirectTo: '/home', pathMatch: 'full' },
   { path: 'home', component: HomeComponent, canActivate: [SecurityGuard]  },
  // { path: 'producto', loadChildren: () => import('./feature/locker/lockers.module').then(mod => mod.LockersModule)},
   //{ path: 'locker', loadChildren: () => import('@lockers/lockers.module').then(l => l.LockersModule)},
   { path: 'login', loadChildren: () => import('./feature/login/login/login.module').then(m => m.LoginModule) },
   // { path: '', redirectTo: MAIN, pathMatch: 'full' },
  {
    path: '',
    loadChildren: () => import('./feature/login/login/login.module').then(i => i.LoginModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
