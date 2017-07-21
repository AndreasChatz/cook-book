import { NgModule }                from '@angular/core';
import { Routes, RouterModule }    from '@angular/router';

import { AuthGuard }               from './auth/auth-guard.service';
import { SigninComponent }         from './auth/signin/signin.component';
import { SignupComponent }         from './auth/signup/signup.component';
import { ShoppingListComponent }   from './shopping-list/shopping-list.component';

const appRoutes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full'},
  { path: 'shopping-list', component: ShoppingListComponent},
  { path: 'signup', component: SignupComponent },
  { path: 'signin', component: SigninComponent },
  { path: '**', redirectTo: '/recipes'},
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {

}
