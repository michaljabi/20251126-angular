import { Component, Input, signal } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  template: `
    <header class="mb-2 p-5 bg-warning">
      <h1>{{ appTitle }}</h1>
      <h6>{{ subTitle() }}</h6>
    </header>
  `,
  styles: ``,
})
export class HeaderComponent {
  @Input() appTitle = 'Auction Portal!';

  //protected subTitle = "...znajdziesz zawsze to czego szukasz";

  // to jest STANDARD od ng v21
  subTitle = signal('...znajdziesz zawsze to czego szukasz');

  constructor() {
    setTimeout(() => {
      this.appTitle += '?'; // to zadziała bo mamy zone.js lib -> mechanizm "change detection"

      // Ustawienie wartości sygnału:
      // this.subTitle.set('?');
      // Zmiana aktualnej wartości sygnału:
      this.subTitle.update((v) => v + '?');
    }, 3000);
  }
}
