import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CartSidebarComponent } from "../cart-sidebar/cart-sidebar.component";
import { AuthService } from '../../Service/auth.service';

@Component({
  selector: 'app-header',
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{
  public isLogin:boolean=false;
  constructor(private authService:AuthService){

  }
  ngOnInit(): void {
    this.authService.isLoggIn.subscribe(
      {
        next:(behaviorvalue)=>{
            this.isLogin = behaviorvalue;
        }
      }
    )
  }

  @Output() toggleCart = new EventEmitter<void>();
  cartItemsCount: number = 0;
  cartItems: any[] = [];

  wishlistItemsCount: number = 0;

  onCartClick() {
    this.toggleCart.emit();
  }
  onLogOutClick(){
    this.authService.logout();
  }
  
}
