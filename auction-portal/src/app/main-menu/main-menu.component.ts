import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-main-menu',
  imports: [],
  templateUrl: './main-menu.component.html',
  styles: ``,
})
export class MainMenuComponent {
  isMenuOpen = false;

  // Sn jest dodane tylko dla tego że powyżej używam już isMenuOpen
  isMenuOpenSn = signal(false);

  toggleMenu() {
    // console.log('!')
    this.isMenuOpen = !this.isMenuOpen;
    // podejście sygnałowe:

    // this.isMenuOpenSn.set(true)

    // jeśli chcemy odczytać wartość sygnału
    console.log(this.isMenuOpenSn())

    // takie podejście jest akceptowalne:
    // this.isMenuOpenSn.set(!this.isMenuOpenSn())

    // ale TO - jest BEZPIECZNIEJSZE:
    this.isMenuOpenSn.update((v) => !v);
  }
}
