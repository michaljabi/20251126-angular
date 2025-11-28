import { Component, inject } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-auction-page',
  imports: [SharedModule, ReactiveFormsModule],
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
          </div>
          <div class="form-group">
            <label for="auctionPrice">Cena aukcji</label>
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text">
                  <fa-icon icon="tag"></fa-icon>
                </span>
              </div>
              <input formControlName="price" id="auctionPrice" type="number" name="price" class="form-control" />
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
              <input formControlName="imgId" id="img" type="number" name="imgUrl" class="form-control" />
            </div>
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
            <button class="btn btn-primary" type="submit">
              <fa-icon icon="sun"></fa-icon> Dodaj aukcję
            </button>
          </div>
        </form>
      </div>
    </section>
  `,
  styles: ``,
})
export class AddAuctionPageComponent {
  private fb = inject(FormBuilder);
  // formularz budujemy tutaj:

  auctionForm = this.fb.group({
    title: ['', Validators.required],
    imgId: [67, [Validators.min(1), Validators.max(1080)]],
    price: [0, Validators.required],
    description: [''],
  });

  handleAuctionSubmit() {
    console.log('Dane fromularza:', this.auctionForm.value);
  }
}
