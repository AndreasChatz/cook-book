import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe("A Test Recipe", "This is a test recipe", "http://www.seriouseats.com/images/2012/07/20120730216565-chilaquiles-pumpkin-seed-salsa-verde-1.jpeg"),
    new Recipe("A Test Recipe", "This is a test recipe", "http://www.seriouseats.com/images/2012/07/20120730216565-chilaquiles-pumpkin-seed-salsa-verde-1.jpeg"),
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
