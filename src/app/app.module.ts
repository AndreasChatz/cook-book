import { NgModule }      from '@angular/core';
import { HttpModule }    from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';

import { AuthGuard }               from './auth/auth-guard.service';
import { AuthModule }              from './auth/auth.module';
import { AuthService }             from './auth/auth.service';
import { AppComponent }            from './app.component';
import { SharedModule }            from './shared/shared.module';
import { RecipesModule }           from './recipes/recipes.module';
import { RecipeService }           from './recipes/recipe.service';
import { HeaderComponent }         from './header/header.component';
import { AppRoutingModule }        from './app-routing.module';
import { DataStorageService }      from './shared/data-storage.service';
import { ShoppingListModule }      from './shopping-list/shopping-list.module';
import { ShoppingListService }     from './shopping-list/shopping-list.service';
import { RecipeDoesNotExistGuard } from './auth/recipe-does-not-exist-guard.service';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
  ],
  imports: [
    AuthModule,
    HttpModule,
    SharedModule,
    BrowserModule,
    RecipesModule,
    AppRoutingModule,
    ShoppingListModule,
  ],
  providers: [
    AuthGuard,
    AuthService,
    RecipeService,
    DataStorageService,
    ShoppingListService,
    RecipeDoesNotExistGuard,
  ],
  bootstrap: [
    AppComponent,
  ],
})
export class AppModule { }
