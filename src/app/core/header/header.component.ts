// import { HttpEvent, HttpEventType } from '@angular/common/http';
import { AuthService } from '../../auth/auth.service';
import { Response } from '@angular/http';
import { DataStorageService } from '../../shared/data-storage.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})

export class HeaderComponent {
  constructor(private dataStorageService: DataStorageService,
    private authService: AuthService) {}

  onSaveData() {
    this.dataStorageService.storeRecipes()
      .subscribe(
        (response) => {
          // console.log(response.type === HttpEventType.Sent);
          // console.log(response.type === HttpEventType.Response);
          console.log(response);
        }
      );
  }

  onFetchData() {
    this.dataStorageService.getRecipes();
  }

  onLogout() {
    this.authService.logout();
  }

  isAuthenticated() {
    return this.authService.isAuthenticated();
  }
}

