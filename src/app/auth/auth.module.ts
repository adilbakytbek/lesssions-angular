import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from "@angular/router";
import {authRouting} from "./auth.routing";
import {LoginComponent} from './login/login.component';
import {LogoutComponent} from './logout/logout.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    LoginComponent,
    LogoutComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(authRouting),
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AuthModule {
}
