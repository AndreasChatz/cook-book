import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';

import 'rxjs/add/operator/map';

import { RecipeService }        from '../recipes/recipe.service';
import { ShoppingListService }  from '../shopping-list/shopping-list.service';
import { Recipe }               from '../recipes/recipe.model';
import { Ingredient }           from './ingredient.model';
import { AuthService }          from '../auth/auth.service';

@Injectable()
export class DataStorageService {
  constructor(
    private http: Http,
    private recipeService: RecipeService,
    private shoppingListService: ShoppingListService,
    private authService: AuthService,
  ) {}

  storeRecipes() {
    const token: string = this.authService.getToken();

    return this.http.put(
      'https://cook-book-ed64b.firebaseio.com/recipes.json?auth=' + token,
      this.recipeService.getRecipes()
    );
  }

  // Simfona me to site tis angular
  getRecipes() {
    const token: string = this.authService.getToken();

    this.http.get('https://cook-book-ed64b.firebaseio.com/recipes.json?auth=' + token)
      .map(
        (response: Response) => {
          const recipes: Recipe [] = response.json();
          // elegxos gia na prosthesei to field ingredients se periptosi pou
          // den yparxei oste stin vasi na apothikevontai me morfi simfona me
          // to Recipe model
          for (let recipe of recipes) {
            if (!recipe['ingredients']) {
              recipe['ingredients'] = [];
            }
          }
          return recipes;
        }
      )
      .subscribe(
        (response: Recipe []) => {
          this.recipeService.setRecipes(response);
        }
      );
  }

// Pio aplos tropos, doulevei alla einai kaki praktiki
  // getRecipes() {
  //   this.http.get('https://cook-book-ed64b.firebaseio.com/recipes.json')
  //     .subscribe(
  //       (response: Response) => {
  //         const recipes: Recipe [] = response.json();
  //         this.recipeService.setRecipes(recipes);
  //       }
  //     );
  // }

  storeShoppingList() {
    const token: string = this.authService.getToken();

    return this.http.put(
      'https://cook-book-ed64b.firebaseio.com/shopping-list.json?auth=' + token,
      this.shoppingListService.getIngredients()
    );
  }

  getShoppingList() {
    const token: string = this.authService.getToken();

    this.http.get('https://cook-book-ed64b.firebaseio.com/shopping-list.json?auth=' + token)
      .map(
        (response: Response) => response.json()
      )
      .subscribe(
        (response: Ingredient []) => {
          return this.shoppingListService.addIngredients(response);
        }
      )
  }
}
