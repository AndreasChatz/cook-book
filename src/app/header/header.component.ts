import { Component }  from "@angular/core";
import { Response }   from '@angular/http';

import { DataStorageService } from '../shared/data-storage.service';
import { AuthService }        from '../auth/auth.service';

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
}
