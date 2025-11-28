import { Component, input } from '@angular/core';
import { AuctionItem } from '../auction-item';

@Component({
  selector: 'app-auction-card',
  imports: [],
  template: `
    <div class="card mt-4">
      @let auct = auction();
      <div class="card-header">{{ auct.title }}</div>
      <img class="card-img" [src]="auct.imgUrl" [alt]="auct.title" />
      <div class="card-body">
        <p class="card-text">{{ auct.description }}</p>
        <div class="d-flex justify-content-between align-content-center">
          <strong> {{ auct.price }} zł</strong>
          <button class="btn btn-primary">[ + ]</button>
        </div>
      </div>
    </div>
  `,
  styles: ``,
})
export class AuctionCardComponent {
  auction = input.required<AuctionItem>();
}
