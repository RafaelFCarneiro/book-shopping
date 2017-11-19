import { Ingredient } from './../shared/ingredient.model';
import { Recipe } from './../recipes/recipe.model';

export interface FeatureState {
  recipes: State
}

export interface State {
  recipes: Recipe[];
}

const initialState: State = {
  recipes: [
    new Recipe(
      'A test Recipe',
      'This is a simple test',
      'https://www.bbcgoodfood.com/sites/default/files/styles/top_recipe_collection/public/recipe-image-legacy-id-1284456_8.jpg',
      [
        new Ingredient('Meat', 1),
        new Ingredient('French Fries', 20)
      ]
    ),
    new Recipe(
      'Another test Recipe',
      'This is a simple test',
      'https://www.bbcgoodfood.com/sites/default/files/styles/top_recipe_collection/public/recipe-image-legacy-id-1284456_8.jpg',
      [
        new Ingredient('Buns', 2),
        new Ingredient('Meat', 1)
      ]
    )
  ]
}

export function recipeReducer(state = initialState, action) {
  return state;
}
