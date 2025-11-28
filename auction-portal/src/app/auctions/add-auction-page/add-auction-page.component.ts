import { Component, inject } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { JsonPipe, NgStyle } from '@angular/common';
import { AuctionItem } from '../auction-item';
import { AuctionsResourceService } from '../auctions-resource.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-auction-page',
  imports: [SharedModule, ReactiveFormsModule, NgStyle],
  template: `
    <section class="mt-2 row">
      <div class="col-6">
        <img
          class="img-thumbnail"
          alt="Podgląd fotografii"
          [src]="'https://picsum.photos/id/' + auctionForm.value.imgId + '/600/600'"
        />
      </div>
      <div class="col-6">
        <form [formGroup]="auctionForm" (ngSubmit)="handleAuctionSubmit()">
          <div class="form-group">
            <label for="auctionTitle">Nazwa aukcji</label>
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text">
                  <fa-icon icon="edit"></fa-icon>
                </span>
              </div>
              <input
                formControlName="title"
                id="auctionTitle"
                type="text"
                name="title"
                class="form-control"
              />
            </div>
            @if(auctionForm.controls.title.errors && auctionForm.controls.title.touched) {
            <div class="alert alert-danger">
              @if(auctionForm.controls.title.errors['required']) { Pole jest wymagane }
            </div>
            }
          </div>
          <div class="form-group">
            <label for="auctionPrice">Cena aukcji</label>
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text">
                  <fa-icon icon="tag"></fa-icon>
                </span>
              </div>
              <input
                formControlName="price"
                id="auctionPrice"
                type="number"
                name="price"
                class="form-control"
              />
            </div>
          </div>

          <div class="form-group">
            <label for="img">Zdjecie</label>
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text">
                  <fa-icon icon="image"></fa-icon>
                </span>
              </div>
              <input
                formControlName="imgId"
                id="img"
                type="number"
                name="imgUrl"
                class="form-control"
              />
            </div>
            @if(auctionForm.controls.imgId.touched) {
              <app-form-error-box [errors]="auctionForm.controls.imgId.errors" />
            }
          </div>

          <div class="form-group">
            <label for="auctionDescription">Szczegółowy opis</label>
            <div class="input-group mb-3">
              <textarea
                id="auctionDescription"
                rows="5"
                class="form-control"
                name="description"
                formControlName="description"
              ></textarea>
            </div>
          </div>
          <div class="text-right">
            <button
              class="btn btn-primary"
              type="submit"
              [ngStyle]="{ opacity: auctionForm.invalid ? 0.5 : 1 }"
            >
              <fa-icon icon="sun"></fa-icon> Dodaj aukcję
            </button>
          </div>
        </form>
      </div>
    </section>
  `,
  styles: `

    input.ng-invalid.ng-touched,
    textarea.ng-invalid.ng-touched {
       border: 2px solid #f14668;
    }
  
  `,
})
export class AddAuctionPageComponent {
  private fb = inject(FormBuilder);
  // formularz budujemy tutaj:
  private auctionResourceS = inject(AuctionsResourceService);

  private router = inject(Router);

  auctionForm = this.fb.nonNullable.group({
    title: ['', Validators.required],
    imgId: [0, [Validators.min(1), Validators.max(1084)]],
    price: [0, [Validators.required, Validators.min(0)]],
    description: [''],
  });

  handleAuctionSubmit() {
    if (this.auctionForm.invalid) {
      this.auctionForm.markAllAsTouched();
      return;
    }

    const newAuctionItem: Omit<AuctionItem, 'id'> = {
      imgUrl: 'https://picsum.photos/id/' + this.auctionForm.value.imgId + '/600/600',
      price: this.auctionForm.value.price ?? 0,
      title: this.auctionForm.value.title ?? '',
      description: this.auctionForm.value.description
    };

    console.log('Dane fromularza:', newAuctionItem);
    
    
    this.auctionResourceS.addNewAuction(newAuctionItem).subscribe({
      next: (auction) => {
        // po wysyłce prawidłowej.
        this.auctionForm.reset({
          imgId: 10
        })
        this.router.navigate(['/auctions'])
      },
      error: (e) => {}
    })
  }
}
