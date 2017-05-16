import { Recipe } from './recipe.model';

export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe("A Test Recipe", "This is a test recipe", "http://www.seriouseats.com/images/2012/07/20120730216565-chilaquiles-pumpkin-seed-salsa-verde-1.jpeg"),
    new Recipe("Another Test Recipe", "This is another test recipe", "http://www.seriouseats.com/images/2017/03/20170324-vegan-snack-recipes-roundup-13.jpg"),
  ];

  getRecipes() {
    return this.recipes.slice(); // Thus we return a copy of the array so we can never access the recipes array from outside.
  }
}
