import { Component, inject, OnInit } from '@angular/core';
import { AuctionsResourceService } from './auctions-resource.service';
import { AuctionItem } from './auction-item';
import { JsonPipe } from '@angular/common';

@Component({
  imports: [JsonPipe],
  template: `
    <section>
      <h2>Lista naszych aukcji</h2>
      <div class="row">
        @for(x of [1,2,3,4,5]; track x) {
           <div class="col-12 col-sm-6 col-md-4 col-lg-3">[{{ x }}]</div>
        }
      </div>
      --> {{ auctionItems | json }}
    </section>
  `,
  styles: ``,
})
export class AuctionsPageComponent implements OnInit {

  private readonly auctionResourceService = inject(AuctionsResourceService)
  auctionItems: AuctionItem[] = [];

  ngOnInit(): void {
    // tutaj pobieramy dane
    this.auctionResourceService.getAllAuctions().subscribe({
      next: (ai) => {
        this.auctionItems = ai;
      }
    })
  }
}
