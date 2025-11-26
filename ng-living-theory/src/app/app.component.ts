import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from './menu.component';
import { SampleCounter } from './sample-counter/sample-counter';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MenuComponent, SampleCounter],
  template: `
    <main class="container mb-5">
      <header class="hero is-info">
        <div class="hero-body">
          <h1 class="title">Angular Live Theory???</h1>
          <h4 class="subtitle">sprawdź jak działa {{ title }}!...</h4>
        </div>
      </header>
      HELLO...
      <!-- TUTAJ osadź komponent -->
      <app-sample-counterz />
      <app-sample-counterz />
      <app-sample-counterz />
      <app-sample-counterz />
      <app-sample-counterz />
      <section class="columns mt-5">
        <app-menu></app-menu>
        <div class="column is-9 content">
          <router-outlet></router-outlet>
        </div>
      </section>
    </main>
  `,
  styles: [],
})
export class AppComponent {
  title = 'ng-living-theory !!';
}
