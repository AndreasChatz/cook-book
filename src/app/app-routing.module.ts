import { NgModule }                from '@angular/core';
import { Routes, RouterModule }    from '@angular/router';

import { HomeComponent }           from './core/home/home.component';
import { ShoppingListComponent }   from './shopping-list/shopping-list.component';

const appRoutes: Routes = [
  // { path: '', redirectTo: '/recipes', pathMatch: 'full'},
  { path: '', component: HomeComponent},
  { path: 'recipes', loadChildren: './recipes/recipes.module#RecipesModule'},
  { path: 'shopping-list', component: ShoppingListComponent},
  { path: '**', redirectTo: '/recipes'},
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {

}
