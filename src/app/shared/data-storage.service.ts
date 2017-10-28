import { Recipe } from './../recipes/recipe.model';
import { RecipeService } from '../recipes/recipe.service';
import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';


@Injectable()
export class DataStorageService {
  constructor(private http: Http, private recipeService: RecipeService) {}

  storeRecipes() {
    return this.http.put(
      this.getUrl('recipes.json'),
      this.recipeService.getRecipes()
    );
  }

  getRecipes() {
    this.http.get(this.getUrl('recipes.json'))
      .map(
        (response: Response) => {
          const recipes: Recipe[] = response.json();
          for (const recipe of recipes) {
            if (!recipe['ingredients']) {
              recipe['ingredients'] = [];
            }
          }
          return recipes;
        }
      ).subscribe(
        (recipes: Recipe[]) => {
          this.recipeService.setRecipes(recipes);
        }
      );
  }

  private getUrl(append) {
    return `https://recipe-book-ng-study.firebaseio.com/${append}`
  }
}
