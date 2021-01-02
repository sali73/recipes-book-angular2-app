import { Ingredient } from '../shared/ingredient.model';
import { EventEmitter } from '@angular/core';

export class ShoppingListService{
    ingredientsChange = new EventEmitter<Ingredient[]>()
    
   private ingredients:Ingredient[]=[
        new Ingredient('ingredients-test', 22),
        new Ingredient('ingredients-test-2', 22),
        new Ingredient('ingredients-test-3', 22)
    
      ];
    
      getIngredients(){
          return this.ingredients.slice();
      }
      addIngredients(ingredients:Ingredient){
        this.ingredients.push(ingredients);
        this.ingredientsChange.emit(this.getIngredients())
      }

      addIngredient( ingredients: Ingredient[]){
        //   for(let ingredient of ingredients){
        //     this.addIngredients(ingredient)
        //   }
        this.ingredients.push(...ingredients)
        this.ingredientsChange.emit(this.getIngredients())
      }
} 