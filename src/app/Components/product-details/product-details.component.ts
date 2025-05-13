import { Component, OnInit, signal } from '@angular/core'; 
import { ActivatedRoute } from '@angular/router';
import { RouterModule } from '@angular/router';
import { environment } from '../../../environments/enviroment';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../../Service/product.service';
import { Product } from '../../Interfaces/Product/Product.models';
import { AuthService } from '../../Service/auth.service';
import { ManageUnAuthUserService } from '../../Service/manage-un-auth-user.service';
import { CartItems } from '../../Interfaces/Cart/Cart.models';

@Component({
  selector: 'app-product-details',
  imports: [
    RouterModule,CommonModule,
    FormsModule
  ],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent  implements OnInit 
{

  public isLogin: boolean = false;

selectedTab: 'description' | 'info' = 'description';
product:Product=
{
  id: 0,
  pictureUrl: "",
  name: "",
  price: 0,
  category: "",
  description: "",
  brand: "",
  brandId: 0,
  type: "",
  typeId: 0,
  isFavourited: false
}
counter=signal<number>(0)

minus()
{
   if(this.counter()>0){
  this.counter.update((old)=>--old)
   }
}
plus()
{
 
  this.counter.update((old)=>++old)
}

constructor(private service:ProductService,private unAthuUser:ManageUnAuthUserService,private authService:AuthService  , private route: ActivatedRoute)
{

} 
ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.service.getProductByID(id).subscribe(
        (data) => {
          data.pictureUrl = data.pictureUrl.replace(
            environment.apiBaseUrl.substring(0, environment.apiBaseUrl.length - 3),
            ''
          );
          this.product = data;

          console.log("Product received:", this.product);
        }
      );
    }
    this.authService.isLoggIn.subscribe(
        {
          next: (behaviorvalue) => {
            this.isLogin = behaviorvalue;
          }
        }
      ) 
  }

  Add()
  {
    const qty = this.counter();
  if (qty < 1) {
    alert('please Add Valid Quantity');
    return;
  }
    if(this.isLogin){
      this.service.addToCart(this.product,qty).subscribe
        ( {
            next: () => {
            alert('SucessFull');
            }
          }
        );          
    }
    else{
      const newProduct: CartItems={
        id:this.product.id,
        productName:this.product.name,
        pictureUrl:this.product.pictureUrl,
        description:this.product.description,
        brand: this.product.brand,
        type: this.product.type,
        price: this.product.price,
        quantity: qty
      }
      this.unAthuUser.AddProductToCart(newProduct);
    }



  }




}

 

