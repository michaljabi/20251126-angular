import { Routes } from '@angular/router';
import { AuctionsPageComponent } from './auctions/auctions-page.component';
import { PromotionsPageComponent } from './auctions/promotions-page/promotions-page.component';
import { AddAuctionPageComponent } from './auctions/add-auction-page/add-auction-page.component';
import { CartPageComponent } from './auctions/cart-page/cart-page.component';
// import { HeaderComponent } from './header/header.component';

export const routes: Routes = [
  { path: '', redirectTo: '/auctions', pathMatch: 'full' },
  { path: 'auctions', component: AuctionsPageComponent },
  { path: 'promotions', component: PromotionsPageComponent },
  { path: 'add-auction', component: AddAuctionPageComponent },
  { path: 'cart', component: CartPageComponent },
  // { path: '**', component: HeaderComponent }
];
