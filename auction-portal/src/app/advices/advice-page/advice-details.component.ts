import { JsonPipe } from '@angular/common';
import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-advice-details',
  imports: [JsonPipe],
  template: ` <p>advice-details works! {{ activatedRoute.snapshot.params | json }}</p> `,
  styles: ``,
})
export class AdviceDetailsComponent implements OnInit, OnDestroy {
  activatedRoute = inject(ActivatedRoute);

  ngOnInit(): void {
    // console.log('Nowy param:', this.activatedRoute.snapshot.params['adviceId']);
    this.activatedRoute.params.subscribe((params) => {
      console.log('Faktyczny nowy param:', params['adviceId']);
      this.loadAdvice(params['adviceId']);
    });
  }

  ngOnDestroy(): void {
    console.log('Komponent AdviceDetailsComponent - zniszczony!');
  }

  loadAdvice(id: string) {
    // uruchamiamy jakiś service to wyświetlenia treści advice....
    console.warn('Ładuje informacje dla Advice id', id);
  }
}
