import { NgModule }              from '@angular/core';
import { CommonModule }          from '@angular/common';
import { ReactiveFormsModule }   from '@angular/forms';

import { SharedModule }          from '../shared/shared.module';
import { RecipesComponent }      from './recipes.component';
import { RecipeItemComponent }   from './recipe-list/recipe-item/recipe-item.component';
import { RecipeListComponent }   from './recipe-list/recipe-list.component';
import { RecipeEditComponent }   from './recipe-edit/recipe-edit.component';
import { RecipeStartComponent }  from './recipe-start/recipe-start.component';
import { RecipesRoutingModule }  from './recipes-routing.module';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';

@NgModule({
  declarations: [
    RecipesComponent,
    RecipeListComponent,
    RecipeEditComponent,
    RecipeItemComponent,
    RecipeStartComponent,
    RecipeDetailComponent,
  ],
  imports: [
    SharedModule,
    CommonModule,
    ReactiveFormsModule,
    RecipesRoutingModule,
  ],
})
export class RecipesModule {}
