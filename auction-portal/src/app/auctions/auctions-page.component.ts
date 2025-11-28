import { Component, inject, OnInit, signal } from '@angular/core';
import { AuctionsResourceService } from './auctions-resource.service';
import { AuctionItem } from './auction-item';
import { JsonPipe } from '@angular/common';

@Component({
  imports: [JsonPipe],
  template: `
    <section>
      <h2>Lista naszych aukcji</h2>
      <div class="row">
        <div class="col-12">
          @let errorM = errorMessage();
          @if(errorM) {
            <div class="alert alert-danger">Niestet wystąpił błąd... {{ errorM }}</div>
          } @if(isLoading) {
            <div class="alert alert-info">Ładuje aukcje...</div>
          }
        </div>
        @for(auction of auctionItems; track auction.id) {
          <div class="col-12 col-sm-6 col-md-4 col-lg-3">
            {{ auction | json }}
            <!-- tutaj daj komponent do wyświetlania jednej aukcji -->
          </div>
        }
      </div>
    </section>
  `,
  styles: ``,
})
export class AuctionsPageComponent implements OnInit {
  private readonly auctionResourceService = inject(AuctionsResourceService);
  auctionItems: AuctionItem[] = [];
  isLoading = false;
  errorMessage = signal('');

  ngOnInit(): void {
    // tutaj pobieramy dane
    this.reloadAuctions();
  }

  reloadAuctions() {
    this.isLoading = true;
    this.errorMessage.set('');
    this.auctionResourceService.getAllAuctions().subscribe({
      next: (ai) => {
        this.auctionItems = ai;
        this.isLoading = false;
      },
      error: (e: any) => {
        console.log('Mam error', e);
        this.errorMessage.set(e.message);
        this.isLoading = false;
      },
      complete: () => {
        console.log('Stumień kompletny');
        this.isLoading = false;
      },
    });
  }
}
