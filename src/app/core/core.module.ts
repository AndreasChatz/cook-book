import { NgModule } from '@angular/core';

import { AuthGuard }               from '../auth/auth-guard.service';
import { AuthService }             from '../auth/auth.service';
import { SharedModule }            from '../shared/shared.module';
import { HomeComponent }           from './home/home.component';
import { RecipeService }           from '../recipes/recipe.service';
import { HeaderComponent }         from './header/header.component';
import { AppRoutingModule }        from '../app-routing.module';
import { DataStorageService }      from '../shared/data-storage.service';
import { ShoppingListService }     from '../shopping-list/shopping-list.service';
import { RecipeDoesNotExistGuard } from '../auth/recipe-does-not-exist-guard.service';


@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
  ],
  imports: [
    SharedModule,
    AppRoutingModule,
  ],
  exports: [
    AppRoutingModule, // xriazetai???? :/
    HeaderComponent,
  ],
  providers: [
    AuthGuard,
    AuthService,
    RecipeService,
    DataStorageService,
    ShoppingListService,
    RecipeDoesNotExistGuard,
  ]
})
export class CoreModule {

}
