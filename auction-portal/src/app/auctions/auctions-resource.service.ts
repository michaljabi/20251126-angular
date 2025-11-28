import { inject, Injectable } from '@angular/core';
import { AuctionItem } from './auction-item';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// To jest tzw. STATELESS service
// czyli nie przechowuje danych (nie cacheuje nic)
// ma jedno zadanie -> zarządzanie danymi związanymi z Auctions od serwera
@Injectable({
  providedIn: 'root',
})
export class AuctionsResourceService {

  private readonly auctionsEndpoint = 'http://localhost:3000/auctions';

  // chcemy skorzystać z Dependency Injection
  private readonly httpClient = inject(HttpClient);

  getAllAuctions(): Observable<AuctionItem[]> {
    // wyślij GET....
    // AuctionItem[] === Array<AuctionItem>
    return this.httpClient.get<AuctionItem[]>(this.auctionsEndpoint);
  }

  addNewAuction(auction: Omit<AuctionItem, 'id'>) {
    // wyślij POST....
    return this.httpClient.post<AuctionItem>(this.auctionsEndpoint, auction)
  }
}
