import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe(
      'A test Recipe',
      'This is a simple test',
      'https://www.bbcgoodfood.com/sites/default/files/styles/top_recipe_collection/public/recipe-image-legacy-id-1284456_8.jpg'
    ),
    new Recipe(
      'Another test Recipe',
      'This is a simple test',
      'https://www.bbcgoodfood.com/sites/default/files/styles/top_recipe_collection/public/recipe-image-legacy-id-1284456_8.jpg'
    )

  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

}
