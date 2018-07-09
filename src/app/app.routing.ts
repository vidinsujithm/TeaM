import { FormEditComponent } from './form-edit/form-edit.component';
import { EventComponent } from './event/event.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from "@angular/core";
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './shared/auth.guard/auth.guard';
export const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    data: {pageTitle: 'Login'}
  },
  {
    path:'app/skyfinch/dashboard',
    component:HomeComponent,
    canActivate: [AuthGuard] 
  
  },
  {
    path:'app/skyfinch/event',
    component:EventComponent,
    canActivate: [AuthGuard] 
  
  },
  {
    path:'app/skyfinch/form',
    component:FormEditComponent,
    canActivate: [AuthGuard] 
  
  },
  {
    path:'app/skyfinch/pagenotfound',
    component:PageNotFoundComponent
  
  },
  {path: '**', redirectTo: 'app/skyfinch/pagenotfound'}

];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, {useHash: true});