import {Routes} from "@angular/router";
import {LoginComponent} from "./login/login.component";
import {LogoutComponent} from "./logout/logout.component";

export const authRouting: Routes = [
  {
    path: '', // Auth -> /auth/login
    children: [
      {path: '', redirectTo: '/auth/login', pathMatch: 'full'},
      {path: 'login', component: LoginComponent},  // Login path /auth/login
      {path: 'logout', component: LogoutComponent} // register path /auth/logout
    ]
  }

]
