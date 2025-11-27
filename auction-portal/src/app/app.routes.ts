import { Routes } from '@angular/router';
import { AuctionsPageComponent } from './auctions/auctions-page.component';
// import { HeaderComponent } from './header/header.component';

export const routes: Routes = [
  { path: '', redirectTo: '/auctions', pathMatch: 'full' },
  { path: 'auctions', component: AuctionsPageComponent },
  // { path: '**', component: HeaderComponent }
];
