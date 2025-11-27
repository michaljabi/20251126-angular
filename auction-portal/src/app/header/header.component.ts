import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  template: `
    <header class="mb-2 p-5 bg-warning">
      <h1>{{ appTitle }}</h1>
      <h6>{{ subTitle }}</h6>
    </header>
  `,
  styles: ``,
})
export class HeaderComponent {
  appTitle: string = 'Auction Portal!';

  subTitle = "...znajdziesz zawsze to czego szukasz";
}
