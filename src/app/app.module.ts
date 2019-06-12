import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { SignupComponent } from './signup/signup.component';
import { ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { DemoMaterialModule } from '../material-module'
import { FormsModule }   from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddadminComponent } from './addadmin/addadmin.component';
import { LeftNavComponent } from './left-nav/left-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ManagemagazineComponent } from './managemagazine/managemagazine.component';
import { AddmagazineComponent } from './addmagazine/addmagazine.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';




/*
import {FormBuilder} from '@angular/forms';
*/


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ForgetpasswordComponent,
    SignupComponent,
    AddadminComponent,
    LeftNavComponent,
    DashboardComponent,
    ManagemagazineComponent,
    AddmagazineComponent,
    ResetpasswordComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    DemoMaterialModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


