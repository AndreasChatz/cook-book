import { Subject } from 'rxjs/Subject';

import { Ingredient } from '../shared/ingredient.model';

export class ShoppingListService {
  ingredientChanged = new Subject<Ingredient[]>(); // !
  startedEditing = new Subject<number>();
  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  getIngredient(index: number) {
    return this.ingredients[index];
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientChanged.next(this.ingredients.slice());
    // Otan allaksei kati sto ingredient [] tote kanoume emit ena neo copy tou array oste na einai up to date, sto shopping-list-component kanoume subscribe kai ananeonoume ton ekei array ingredient kathe fora pou allazei
  }

  addIngredients(ingredients: Ingredient[]) {
    // for (let ingredient of ingredients) {  // trexei alla den einai
    //   this.addIngredient(ingredient);      // kalos tropos giati gia se
    // }                                      // kathe loop tha kanei emit

    this.ingredients.push(...ingredients); //spread operator
    this.ingredientChanged.next([...this.ingredients]); // oti kanei kai i this.ingredients.splice();
  }

  updateIngredient(index: number, newIngredient: Ingredient) {
    this.ingredients[index] = newIngredient;
    this.ingredientChanged.next(this.ingredients.slice());
  }

  deleteIngredient(index: number) {
    this.ingredients.splice(index, 1);
    this.ingredientChanged.next(this.ingredients.slice());
  }
}
