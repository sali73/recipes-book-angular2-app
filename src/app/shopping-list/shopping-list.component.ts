import { Component, OnInit } from '@angular/core';
import {Ingredient} from '../shared/ingredient.model'
import { from } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients:Ingredient[]=[
    new Ingredient('ingredients-test', 22),
    new Ingredient('ingredients-test-2', 22),
    new Ingredient('ingredients-test-3', 22)

  ];

  constructor() { }

  ngOnInit(): void {
  }
  onIngredientAdded(ingredient:Ingredient){
    this.ingredients.push(ingredient)

  }

}
