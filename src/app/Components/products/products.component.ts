import { Component, EventEmitter, NgModule, OnInit, Output } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Product } from '../../Interfaces/Product/Product.models';
import { ProductService } from '../../Service/product.service';
import { environment } from '../../../environments/enviroment';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-products',
  standalone: true,  // Required if using standalone
  imports: [RouterModule, FormsModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css',]
})
export class ProductsComponent implements OnInit{
  public products: Product[] = [];
  public currentPage = 1;
  public itemsPerPage = 9; // You can change this default
  public totalItems = 0;
  public totalPages = 0;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
  this.productService.getProducts(this.currentPage, this.itemsPerPage).subscribe({
    next: (response) => {
      this.products = response.value.data.map(p => ({
        ...p,
        pictureUrl: p.pictureUrl.replace(
          environment.apiBaseUrl.substring(0, environment.apiBaseUrl.length-3),
          ''
        ),
        isFavourited:false
      }));

      // Now this will work as count is properly typed
      this.totalItems = response.value.count;
      this.totalPages = Math.ceil(this.totalItems / this.itemsPerPage);
    },
    error: (err) => {
      console.error('Error loading products:', err);
    }
  });
}

  goToPage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.loadProducts();
    }
  }

  getPages(): number[] {
  const pagesToShow = 5; // Number of page numbers to show
  const pages: number[] = [];

  let startPage = Math.max(1, this.currentPage - Math.floor(pagesToShow / 2));
  let endPage = startPage + pagesToShow - 1;

  if (endPage > this.totalPages) {
    endPage = this.totalPages;
    startPage = Math.max(1, endPage - pagesToShow + 1);
  }

  for (let i = startPage; i <= endPage; i++) {
    pages.push(i);
  }

  return pages;
  }

  toggleWishlist(product: Product) {
    product.isFavourited = !product.isFavourited;
  }
}
