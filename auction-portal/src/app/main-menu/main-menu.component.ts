import { Component } from '@angular/core';

@Component({
  selector: 'app-main-menu',
  imports: [],
  templateUrl: './main-menu.component.html',
  styles: ``,
})
export class MainMenuComponent {
  isMenuOpen = false;

  toggleMenu() {
    // console.log('!')
    this.isMenuOpen = !this.isMenuOpen;
  }
}
