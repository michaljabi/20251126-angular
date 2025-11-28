import { JsonPipe } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-advice-details',
  imports: [JsonPipe],
  template: ` <p>advice-details works! {{ activatedRoute.snapshot.params | json }}</p> `,
  styles: ``,
})
export class AdviceDetailsComponent implements OnInit {
  activatedRoute = inject(ActivatedRoute);

  ngOnInit(): void {
    console.log('Nowy param:', this.activatedRoute.snapshot.params['adviceId']);
  }
}
