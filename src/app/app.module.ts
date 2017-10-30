import { ShoppingListModule } from './shopping-list/shopping-list.module';
import { AuthGuard } from './auth/auth-guard.service';
import { AuthService } from './auth/auth.service';
import { DataStorageService } from './shared/data-storage.service';
import { RecipeService } from './recipes/recipe.service';
import { ShoppingListService } from './shopping-list/shopping-list.service';

import { HeaderComponent } from './header/header.component';

import { SharedModule } from './shared/shared.module';
import { RecipesModules } from './recipes/recipes.module';
import { AuthModule } from './auth/auth.module';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    AuthModule,
    ShoppingListModule,
    RecipesModules,
    SharedModule
  ],
  providers: [
    ShoppingListService,
    RecipeService,
    DataStorageService,
    AuthService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
