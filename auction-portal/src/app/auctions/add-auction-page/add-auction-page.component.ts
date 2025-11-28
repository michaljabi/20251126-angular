import { Component } from '@angular/core';
import { SharedModule } from "../../shared/shared.module";

@Component({
  selector: 'app-add-auction-page',
  imports: [SharedModule],
  template: `
    <section class="mt-2 row">
  <div class="col-6">
    <img
      class="img-thumbnail"
      alt="Podgląd fotografii"
      [src]="'https://picsum.photos/id/1/600/600'"
    />
  </div>
  <div class="col-6">
    <form>
      <div class="form-group">
        <label for="auctionTitle">Nazwa aukcji</label>
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text">
              <fa-icon icon="edit"></fa-icon>
            </span>
          </div>
          <input
            id="auctionTitle"
            type="text"
            name="title"
            required
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
          <input
            id="auctionPrice"
            type="number"
            name="price"
            required
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
            id="img"
            type="number"
            name="imgUrl"
            required
            class="form-control"
          />
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

}
