import { NgModule }                from '@angular/core';
import { Routes, RouterModule }    from '@angular/router';

import { ShoppingListComponent }   from './shopping-list/shopping-list.component';

const appRoutes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full'},
  { path: 'shopping-list', component: ShoppingListComponent},
  { path: '**', redirectTo: '/recipes'},
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {

}
