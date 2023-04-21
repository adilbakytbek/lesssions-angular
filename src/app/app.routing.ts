import {Routes} from "@angular/router";

export const appRouting: Routes = [
  // Описываем route

  {
    path: '', redirectTo: '/auth/login', pathMatch: 'full'
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) // Load Auth Module
  }
]
