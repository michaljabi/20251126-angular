import { Component, input, output } from '@angular/core';
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
        @if(hasBlackWeekPromo()) {
        <p class="bg-secondary text-white text-center">PROMOCJA balck week</p>
        }
        <p class="card-text">{{ auct.description }}</p>
        <div class="d-flex justify-content-between align-content-center">
          <strong> {{ auct.price }} zł</strong>
          @if(canAddToCart()) {
          <button class="btn btn-primary" (click)="addToCart.emit(auct)">[ + ]</button>
          }
        </div>
      </div>
    </div>
  `,
  styles: ``,
})
export class AuctionCardComponent {
  // To jest DUMMY component (re-używalny komponent)
  // bo NIE WIE kto wrzuca input
  auction = input.required<AuctionItem>();
  // i NIE WIE kto odbierze ten event (addToCart)
  addToCart = output<AuctionItem>();

  hasBlackWeekPromo = input(false);
  canAddToCart = input(true);
}
