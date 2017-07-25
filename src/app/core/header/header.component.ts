import { Response }   from '@angular/http';
import { Component }  from "@angular/core";

import { AuthService }        from '../../auth/auth.service';
import { DataStorageService } from '../../shared/data-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {

  constructor(
    private dataStorageService: DataStorageService,
    private authService: AuthService,
  ) {}

  onSaveRecipes() {
    this.dataStorageService.storeRecipes()
      .subscribe();
  }

  onFetchRecipes() {
    this.dataStorageService.getRecipes();
  }

  onSaveShoppingList() {
    this.dataStorageService.storeShoppingList()
      .subscribe();
  }

  onFetchShoppingList() {
    this.dataStorageService.getShoppingList();
  }

  onLogout() {
    this.authService.logout();
  }

  isAuthenticated() {
    return this.authService.isAuthenticated();
  }
}
