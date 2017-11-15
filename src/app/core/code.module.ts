import { LoggingInterceptor } from './../shared/logging.interceptor';
import { AuthInterceptor } from '../shared/auth.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthService } from './../auth/auth.service';
import { DataStorageService } from './../shared/data-storage.service';
import { RecipeService } from './../recipes/recipe.service';

import { AppRoutingModule } from '../app-routing.module';
import { SharedModule } from '../shared/shared.module';

import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';

import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    SharedModule,
    AppRoutingModule
  ],
  exports: [
    AppRoutingModule,
    HeaderComponent
  ],
  providers: [
    RecipeService,
    DataStorageService,
    AuthService,
    { provide: HTTP_INTERCEPTORS, useClass:  AuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass:  LoggingInterceptor, multi: true }
  ]
})

export class CoreModule {}
