import { NgModule }      from '@angular/core';
import { HttpModule }    from '@angular/http';
import { FormsModule }   from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AuthGuard }               from './auth/auth-guard.service';
import { AuthService }             from './auth/auth.service';
import { AppComponent }            from './app.component';
import { SharedModule }            from './shared/shared.module';
import { RecipesModule }           from './recipes/recipes.module';
import { RecipeService }           from './recipes/recipe.service';
import { HeaderComponent }         from './header/header.component';
import { SigninComponent }         from './auth/signin/signin.component';
import { SignupComponent }         from './auth/signup/signup.component';
import { AppRoutingModule }        from './app-routing.module';
import { DataStorageService }      from './shared/data-storage.service';
import { ShoppingListService }     from './shopping-list/shopping-list.service';
import { ShoppingEditComponent }   from './shopping-list/shopping-edit/shopping-edit.component';
import { ShoppingListComponent }   from './shopping-list/shopping-list.component';
import { RecipeDoesNotExistGuard } from './auth/recipe-does-not-exist-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    HeaderComponent,
    SigninComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
  ],
  imports: [
    HttpModule,
    FormsModule,
    SharedModule,
    BrowserModule,
    RecipesModule,
    AppRoutingModule,
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
