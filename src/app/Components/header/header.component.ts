import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Route, Router, RouterModule } from '@angular/router';
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
  public userName:string="";
  constructor(private authService:AuthService,private router:Router){
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
  cartItemsCount: number = 0;
  cartItems: any[] = [];

  wishlistItemsCount: number = 0;

  onCartClick() {
    this.toggleCart.emit();
  }
  onLogOutClick(){
    this.authService.logout();
    this.router.navigate(['/home']);

  }
  
}
