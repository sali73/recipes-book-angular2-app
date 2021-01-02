import { Recipe } from './recipes.model'
import { EventEmitter, Injectable } from '@angular/core'
import { Ingredient } from '../shared/ingredient.model'
import { ShoppingListService } from '../shopping-list/shopping-list.service'

@Injectable()
export class RecipeService{

  recipeSelected = new EventEmitter<Recipe>()
  
   private Recipes: Recipe[] =[
        new Recipe(
          'name-test', 
          'description-test',
          'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=960,872',
          [
            new Ingredient ('burger' , 12),
            new Ingredient ('apple' , 13)
          ]
          ),
        new Recipe(
          'name-test2', 
          'description-test2',
          'https://i1.wp.com/www.eatthis.com/wp-content/uploads/2019/10/pumpkin-pad-thai-recipe.jpg?fit=1200%2C879&ssl=1',
          [new Ingredient ('juice' , 13)]
          ),
        new Recipe(
          'name-test3', 
          'description-test3',
          'https://veggiecurean.com/wp-content/uploads/2019/05/Pad-Thai-Salad-Bowl-1-500x500.jpg',
          [new Ingredient ('mango' , 14)]
          )
    
      ]

      constructor( private slService: ShoppingListService ){}
    getRecipe(){
        return this.Recipes.slice()
    }
    addIngredientsToShoppingList( ingredients: Ingredient[]){
      this.slService.addIngredient(ingredients)

    }

} 