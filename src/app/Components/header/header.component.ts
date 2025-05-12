import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Route, Router, RouterModule } from '@angular/router';
import { CartSidebarComponent } from "../cart-sidebar/cart-sidebar.component";

import { CartService } from '../../Service/cart.service';
import { WishinglistService } from '../../Service/wishinglist.service';
import { CartWishingDataService } from '../../Service/cart-wishing-data.service';

import { AuthService } from '../../Service/auth.service';


@Component({
  selector: 'app-header',
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{
  public isLogin:boolean=false;
  public userName:string="";
  constructor(private authService:AuthService,private router:Router, private cart: CartService, private wishing: WishinglistService, public cartWishingData: CartWishingDataService){
  }
  ngOnInit(): void {
    this.authService.isLoggIn.subscribe(
      {
        next:(behaviorvalue)=>{
            this.isLogin = behaviorvalue;
        }
      }
    )
    this.authService.userName.subscribe(
      {
        next:(behaviorvalue)=>{
            this.userName = behaviorvalue;
        }
      }
    )
    console.log(this.userName);
  }

  @Output() toggleCart = new EventEmitter<void>();


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


  onLogOutClick(){
    this.authService.logout();
    this.router.navigate(['/home']);

  }
 
}
