import { CanActivate,
         ActivatedRouteSnapshot,
         RouterStateSnapshot,}    from '@angular/router';
import { Injectable, }            from '@angular/core';
import { Router, }                from '@angular/router';

import { AuthService }            from './auth.service';
import { RecipeService }          from '../recipes/recipe.service';

// If the recipe does not exist, prevent the app to crash.
@Injectable()
export class RecipeDoesNotExistGuard implements CanActivate {

  constructor(private router:        Router,
              private recipeService: RecipeService) {}

  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): boolean {

    // get the URL and split it
    const urlParts: string [] = state.url.split('/');
    // get the recipe id
    const id: number = +urlParts[2];
    // get the recipe from the service
    const recipe = this.recipeService.getRecipe(id);

    // if recipe exist return true else redirect user to /recipes
    // and return false to prevent fetching the not existed data
    return recipe ? true : (this.router.navigate(['/recipes']), false);
  }
}
