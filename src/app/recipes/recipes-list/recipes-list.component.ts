import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipes.model'

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  Recipes: Recipe[] =[
    new Recipe('name-test', 'description-test','https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=960,872')
  ]


  constructor() { }

  ngOnInit(): void {
  }

}
