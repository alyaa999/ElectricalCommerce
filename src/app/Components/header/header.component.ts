import { Component, EventEmitter, Output } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CartSidebarComponent } from "../cart-sidebar/cart-sidebar.component";
import { CartService } from '../../Service/cart.service';
import { WishinglistService } from '../../Service/wishinglist.service';
import { CartWishingDataService } from '../../Service/cart-wishing-data.service';

@Component({
  selector: 'app-header',
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @Output() toggleCart = new EventEmitter<void>();

  constructor(private cart: CartService, private wishing: WishinglistService, public cartWishingData: CartWishingDataService) { }

  onCartClick() {
    this.toggleCart.emit();
  }

  // ngDoCheck() {
    // if (localStorage.getItem('token')) {
    //   this.wishing.getWishinglist().subscribe((data) => {
    //     this.cartWishingData.wishingItems.set(data.items);
    //     this.cartWishingData.wishlistItemsCount.set(data.items.length);
    //   });

    //   this.cart.getCartProducts().subscribe(
    //     (data) => {
    //       this.cartWishingData.cartItems.set(data.items);
    //       this.cartWishingData.cartItemsCount.set(data.items.length);
    //     }
    //   );
    // }
  // }


  ngOnInit() {

    this.wishing.getWishinglist().subscribe((data) => {
      this.cartWishingData.wishingItems.set(data.items);
      // this.wishlistItemsCount = data.items.length;
      this.cartWishingData.wishlistItemsCount.set(data.items.length);
    });

    this.cart.getCartProducts().subscribe(
      (data) => {
        this.cartWishingData.cartItems.set(data.items);
        // this.cartItemsCount = data.items.length;
        this.cartWishingData.cartItemsCount.set(data.items.length);
      }
    );


    // this.wishing.getWishinglist().subscribe(
    //   (data) => {
    //     console.log(`dta:  ${data}`);
    //     this.cartWishingData.wishingItems.next(data.items);
    //     this.wishlistItemsCount = data.items.length;
    //   },
    //   (error) => {
    //     console.error('Error fetching wishlist:', error);
    //   }
    // );
  }

}
