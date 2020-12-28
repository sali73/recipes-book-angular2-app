import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Recipe} from '../../recipes.model'
import { from } from 'rxjs';
@Component({
  selector: 'app-recipes-item',
  templateUrl: './recipes-item.component.html',
  styleUrls: ['./recipes-item.component.css']
})
export class RecipesItemComponent implements OnInit {
@Input() recipe: Recipe
@Output() recipeSlected = new EventEmitter<string>()

  constructor() { }

  ngOnInit(): void {
  }
  onSelected(){
    this.recipeSlected.emit()
  }

}
