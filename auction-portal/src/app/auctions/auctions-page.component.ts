import { Component } from '@angular/core';

@Component({
  imports: [],
  template: `
    <section>
      <h2>Lista naszych aukcji</h2>
      <div class="row">
        @for(x of [1,2,3,4,5]; track x) {
           <div class="col-12 col-sm-6 col-md-4 col-lg-3">[{{ x }}]</div>
        }
      </div>
    </section>
  `,
  styles: ``,
})
export class AuctionsPageComponent {}
