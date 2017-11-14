import { Subscription, Observable } from 'rxjs/Rx';
import { Store } from '@ngrx/store';

import { ShoppingListService } from './shopping-list.service';
import { Ingredient } from './../shared/ingredient.model';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  shoppingListState: Observable<{ ingredients: Ingredient[] }>;
  private subscription: Subscription;

  constructor(
      private slService: ShoppingListService,
      private store: Store<{ shoppingList: { ingredients: Ingredient[] } }>
  ) { }

  ngOnInit() {
    this.shoppingListState = this.store.select('shoppingList');

    // this.ingredients = this.slService.getIngredients();
    // this.subscription = this.slService.ingredientChanged.subscribe(
    //   (ingredient: Ingredient[]) => {
    //     this.ingredients = ingredient;
    //   }
    // )
  }

  onEditItem(index: number) {
    this.slService.startedEditing.next(index);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
