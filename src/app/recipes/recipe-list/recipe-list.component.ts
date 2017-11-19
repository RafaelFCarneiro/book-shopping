import * as fromRecipe from '../store/recipe.reducers';

import { Observable } from 'rxjs/Rx';
import { Store } from '@ngrx/store';
import { ActivatedRoute, Router } from '@angular/router';

import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipeState: Observable<fromRecipe.State>;

  constructor(
    private store: Store<fromRecipe.FeatureState>,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.recipeState = this.store.select('recipes');
  }

  onNewRecipe() {
    this.router.navigate(['new'], { relativeTo: this.route })
  }
}
