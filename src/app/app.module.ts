import { NgModule }      from '@angular/core';
import { HttpModule }    from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';

import { AuthModule }              from './auth/auth.module';
import { CoreModule }              from './core/core.module';
import { AppComponent }            from './app.component';
import { SharedModule }            from './shared/shared.module';
import { AppRoutingModule }        from './app-routing.module';
import { ShoppingListModule }      from './shopping-list/shopping-list.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AuthModule,
    HttpModule,
    SharedModule,
    BrowserModule,
    AppRoutingModule,
    ShoppingListModule,
    CoreModule,
  ],
  providers: [
    // Metaferthikan sto core.module.ts
  ],
  bootstrap: [
    AppComponent,
  ],
})
export class AppModule { }
