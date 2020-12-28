import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Recipe} from '../recipes.model'

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
@Output() recipeWasSelected = new EventEmitter<Recipe>()

  Recipes: Recipe[] =[
    new Recipe('name-test', 'description-test','https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=960,872'),
    new Recipe('name-test2', 'description-test2','https://i1.wp.com/www.eatthis.com/wp-content/uploads/2019/10/pumpkin-pad-thai-recipe.jpg?fit=1200%2C879&ssl=1'),
    new Recipe('name-test3', 'description-test3','https://veggiecurean.com/wp-content/uploads/2019/05/Pad-Thai-Salad-Bowl-1-500x500.jpg')

  ]

  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSlected(recipe:Recipe){
    this.recipeWasSelected.emit(recipe)
  }
}
