import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth/auth.service';
import { Recipe } from './../recipes/recipe.model';
import { RecipeService } from '../recipes/recipe.service';
import { Injectable } from '@angular/core';


@Injectable()
export class DataStorageService {
  constructor(private httpClient: HttpClient, private recipeService: RecipeService,
    private authService: AuthService) {}

  storeRecipes() {
    const token = this.authService.getToken();
    return this.httpClient.put(
      this.getUrl('/recipes.json', `?auth=${token}`),
      this.recipeService.getRecipes()
    );
  }

  getRecipes() {
    const token = this.authService.getToken();
    this.httpClient.get<Recipe[]>(this.getUrl('/recipes.json', `?auth=${token}`))
      .map(
        (recipes) => {
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

  private getUrl(append = '', params = '') {
    return `https://recipe-book-ng-study.firebaseio.com${append}${params}`
  }
}
