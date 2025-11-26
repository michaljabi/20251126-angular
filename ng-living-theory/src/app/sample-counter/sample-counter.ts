import { Component } from '@angular/core';

@Component({
  selector: 'app-sample-counterz',
  imports: [],
  template: ` <div>sample-counter works! {{ myLuckyNumber }}</div> `,
  styles: ``,
})
export class SampleCounter {
  myLuckyNumber = 30 * Math.random();

  constructor() {
    setTimeout(() => {
      console.log(this);
      this.myLuckyNumber = 200;
    }, 3000);
  }
}

// const sc = new SampleCounter();
