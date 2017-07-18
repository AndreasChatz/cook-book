import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';

import 'rxjs/add/operator/map';

import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';

@Injectable()
export class DataStorageService {
  constructor(
    private http: Http,
    private recipeService: RecipeService) {}

  storeRecipes() {
    return this.http.put(
      'https://cook-book-ed64b.firebaseio.com/recipes.json',
      this.recipeService.getRecipes()
    );
  }

  // Simfona me to site tis angular
  getRecipes() {
    this.http.get('https://cook-book-ed64b.firebaseio.com/recipes.json')
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
}
