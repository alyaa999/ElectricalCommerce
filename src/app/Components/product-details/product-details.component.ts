import { Component, OnInit, signal } from '@angular/core'; 
import { ActivatedRoute } from '@angular/router';
import { RouterModule } from '@angular/router';
import { environment } from '../../../environments/enviroment';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../../Service/product.service';
import { Product } from '../../Interfaces/Product/Product.models';

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

constructor(private service:ProductService,   private route: ActivatedRoute)
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
  }

  Add()
  {
    const qty = this.counter();
  if (qty < 1) {
    alert('please Add Valid Quantity');
    return;
  }
    
    this.service.addToCart(this.product,qty).subscribe
    ({
      next: () => {
      alert('SucessFull');
    }
    }
    
    );


  }




}

 

