import { EventEmitter } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';

export class ShoppingListService {
  ingredientChanged = new EventEmitter<Ingredient[]>(); // !

  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientChanged.emit(this.ingredients.slice());
    // Otan allaksei kati sto ingredient [] tote kanoume emit ena neo copy tou array oste na einai up to date, sto shopping-list-component kanoume subscribe kai ananeonoume ton ekei array ingredient kathe fora pou allazei
  }
}
