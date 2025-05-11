import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Product } from '../../Interfaces/Product/Product.models';
import { ProductService } from '../../Service/product.service';
import { environment } from '../../../environments/enviroment';

@Component({
  selector: 'app-products',
  standalone: true,  // Required if using standalone
  imports: [RouterModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css',]
})
export class ProductsComponent implements OnInit{
  public products: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe({
      next: (products) => {
        this.products = products.value.data.map(p => ({
          ...p,
          pictureUrl: p.pictureUrl.replace(environment.apiBaseUrl.substring(0, environment.apiBaseUrl.length-3), '')
          }));
        }
    });
  }

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
    console.log("Added to wishlist");
  }
}
