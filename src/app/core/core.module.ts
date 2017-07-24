import { NgModule } from '@angular/core';

import { SharedModule }     from '../shared/shared.module';
import { HomeComponent }    from './home/home.component';
import { HeaderComponent }  from './header/header.component';
import { AppRoutingModule } from '../app-routing.module';

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
  ]
})
export class CoreModule {

}
