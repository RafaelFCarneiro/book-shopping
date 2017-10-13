import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
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

  getRecipes() {
    return this.recipes.slice();
  }
}
