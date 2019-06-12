import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{LoginComponent} from '../app/login/login.component';
import{ForgetpasswordComponent} from '../app/forgetpassword/forgetpassword.component';
import {SignupComponent} from '../app/signup/signup.component'
import {DashboardComponent} from "./dashboard/dashboard.component";
import {ManagemagazineComponent} from "./managemagazine/managemagazine.component";
import {AddmagazineComponent} from "./addmagazine/addmagazine.component";
import {ResetpasswordComponent} from "./resetpassword/resetpassword.component";

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'forgetpassword',component:ForgetpasswordComponent},
  {path:'signup',component:SignupComponent},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'managemagazine', component: ManagemagazineComponent},
  { path: 'addmagazine', component: AddmagazineComponent},
  { path: 'resetpassword', component: ResetpasswordComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
