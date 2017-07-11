import { Injectable} from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();

  constructor(private slService: ShoppingListService) {}

  private recipes: Recipe[] = [
    new Recipe(
      "Fully Loaded Vegan Queso Dip Recipe.",
      "The ultimate party snack, 100% animal product-free form.", "http://www.seriouseats.com/recipes/assets_c/2015/02/20150228-vegan-loaded-queso-dip7-thumb-1500xauto-419943.jpg",
      [
        new Ingredient('tablespoon of vegetable oil', 1),
        new Ingredient('pound of vegan chorizo', 1),
        new Ingredient('Recipe of Vegan Nacho Cheese Sauce', 1),
        new Ingredient('Can of Black beans, drained and rinsed', 1),
        new Ingredient('Cans of Ro*Tel Diced Tomatoes with Green Chilies, drained', 2),
        new Ingredient('Tablespoons of Chopped fresh cilantro leaves, plus more for garnish', 3),
        new Ingredient('Scallions, thinly sliced, plus more for garnish', 4),
        new Ingredient('Avocado, finely diced', 1),
        new Ingredient('Serrano or jalapeño pepper, minced', 1),
        new Ingredient('Hot sauce', 1),
        new Ingredient('Bag tortilla chips', 1),


      ],),
    new Recipe(
      "Breakfast Garlic Toast.",
      "Garlicky whole-grain toast.", "http://www.seriouseats.com/recipes/assets_c/2012/01/20120115-vegan-experience-day-1-5-thumb-625xauto-211728.jpg",
      [
        new Ingredient('Tablespoons of extra-virgin olive oil', 4),
        new Ingredient('Small cloves garlic, grated on a microplane grater', 8),
        new Ingredient('Tablespoons of finely minced fresh parsley leaves', 2),
        new Ingredient('Pinch of red pepper flakes', 1),
        new Ingredient('Tablespoon of kosher salt', 1),
        new Ingredient('Slices of whole grain sandwich bread', 8),
      ],),
  ];

  getRecipes() {
    return this.recipes.slice(); // Thus we return a copy of the array so we can never access the recipes array from outside.
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
