//import { JsonPipe, UpperCasePipe } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterLink } from "@angular/router";

type MyString = string;

type Money = string | number;

type MItem = {
  title: string;
  link: string;
};

interface MenuItem {
  title: string;
  link: string;
}

@Component({
  selector: 'app-main-menu',
  imports: [RouterLink], // wyjaśnienie Pipes.
  templateUrl: './main-menu.component.html',
  styles: ``,
})
export class MainMenuComponent {
  isMenuOpen = false;

  // Sn jest dodane tylko dla tego że powyżej używam już isMenuOpen
  isMenuOpenSn = signal(false);

  menuItems: MenuItem[] = [
    { title: 'Aukcje', link: '/auctions' },
    {
      title: 'Promocje',
      link: '/promotions',
    },
    {
      title: 'Podpowiadamy',
      link: '/advices',
    },
  ];

  toggleMenu() {
    // console.log('!')
    this.isMenuOpen = !this.isMenuOpen;
    // podejście sygnałowe:

    // this.isMenuOpenSn.set(true)

    // jeśli chcemy odczytać wartość sygnału
    console.log(this.isMenuOpenSn());

    // takie podejście jest akceptowalne:
    // this.isMenuOpenSn.set(!this.isMenuOpenSn())

    // ale TO - jest BEZPIECZNIEJSZE:
    this.isMenuOpenSn.update((v) => !v);
  }
}
