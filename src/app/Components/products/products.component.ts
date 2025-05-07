import { Component, EventEmitter, Output } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-products',
  standalone: true,  // Required if using standalone
  imports: [RouterModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  public products = [
    { id: 1, img: "1", name: "Classic Trench Coat", price: 200, category: "women" },
    { id: 2, img: "2", name: "Front Pocket Jumper", price: 500, category: "women" }
  ];

  changeHeartIcon(event: MouseEvent): void {
    const target = event.currentTarget as HTMLElement;
    const img = target.querySelector('img');

    if (img) {
      img.src = 'Icons/icon-heart-02.png';
    }
  }

  resetHeartIcon(event: MouseEvent): void {
    const target = event.currentTarget as HTMLElement;
    const img = target.querySelector('img');

    if (img) {
      img.src = 'Icons/icon-heart-01.png';
    }
  }

  @Output() quickViewClicked = new EventEmitter<number>();
  @Output() wishlistToggled = new EventEmitter<number>();

  openQuickView(productId: number) {
    this.quickViewClicked.emit(productId);
  }

  toggleWishlist(productId: number) {
    this.wishlistToggled.emit(productId);
  }

  AddToWishlist(){
    
  }
}
