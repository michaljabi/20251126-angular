import { Routes } from '@angular/router';
import { AuctionsPageComponent } from './auctions/auctions-page.component';
// import { HeaderComponent } from './header/header.component';

export const routes: Routes = [
  { path: '', redirectTo: '/aucitons', pathMatch: 'full' },
  { path: 'aucitons', component: AuctionsPageComponent },
  // { path: '**', component: HeaderComponent }
];
