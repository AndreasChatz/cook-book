import { NgModule }                from '@angular/core';
import { Routes, RouterModule }    from '@angular/router';

import { AuthGuard }               from './auth/auth-guard.service';
import { SigninComponent }         from './auth/signin/signin.component';
import { SignupComponent }         from './auth/signup/signup.component';
import { RecipesComponent }        from './recipes/recipes.component';
import { RecipeEditComponent }     from './recipes/recipe-edit/recipe-edit.component';
import { RecipeStartComponent }    from './recipes/recipe-start/recipe-start.component';
import { ShoppingListComponent }   from './shopping-list/shopping-list.component';
import { RecipeDetailComponent }   from './recipes/recipe-detail/recipe-detail.component';
import { RecipeDoesNotExistGuard } from './auth/recipe-does-not-exist-guard.service';

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
