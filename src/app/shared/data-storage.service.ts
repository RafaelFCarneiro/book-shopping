import { HttpClient, HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http';
import { AuthService } from '../auth/auth.service';
import { Recipe } from './../recipes/recipe.model';
import { RecipeService } from '../recipes/recipe.service';
import { Injectable } from '@angular/core';


@Injectable()
export class DataStorageService {
  constructor(private httpClient: HttpClient, private recipeService: RecipeService,
    private authService: AuthService) {}

  storeRecipes() {
    const url = this.getUrl('/recipes.json'); // this.getUrl('/recipes.json', `?auth=${token}`)

    // const headers = new HttpHeaders().set('Autorizartion', 'Bearer asd103949234');
    // return this.httpClient.put(
    //   url,
    //   this.recipeService.getRecipes(),
    //   // { observe: 'events' }
    //   {
    //     observe: 'body',
    //     // headers: headers
    //     params: new HttpParams().set('auth', this.authService.getToken())
    //   }
    // );

    const req = new HttpRequest('PUT', url, this.recipeService.getRecipes(), {
      reportProgress: true,
      // params: new HttpParams().set('auth', token)
    });
    return this.httpClient.request(req);
  }

  getRecipes() {
    const url = this.getUrl('/recipes.json') // this.getUrl('/recipes.json', `?auth=${token}`)
    // this.httpClient.get<Recipe[]>(this.getUrl('/recipes.json', `?auth=${token}`))

    this.httpClient.get<Recipe[]>(url, {
      observe: 'body', // this is the default value
      responseType: 'json', // this is the default value
      // params: new HttpParams().set('auth', this.authService.getToken())
    }).map(
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
