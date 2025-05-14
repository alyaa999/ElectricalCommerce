import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../../Service/orders.service';
import { Observable } from 'rxjs';
import { ActivatedRoute, Route } from '@angular/router';
import { OrderDetail } from '../../Interfaces/Orders/Order.models';
import { environment } from '../../../environments/enviroment';

@Component({
  selector: 'app-order-detail',
  imports: [],
  templateUrl: './order-detail.component.html',
  styleUrl: './order-detail.component.css'
})
export class OrderDetailComponent implements OnInit {
  orderDetail: OrderDetail={
    id: 0,
    orderDate: "",
    status: "",
    shippingAddress:{firstName:"",lastName:"",city:"",country:"",street:""},
    deliveryMethod: "",
    deliveryMethodCost: 0,
    items:[],
    subTotal: 0,
    total: 0,
    paymentIntentId: ""
  }
  constructor(private orderService:OrdersService,private router:ActivatedRoute){
  }
  ngOnInit(): void {
    this.orderService.GetCustomerOrderDetail(this.router.snapshot.paramMap.get('id')).subscribe(
      {
        next:(res)=>{
        this.orderDetail = {
          ...res,
          items: res.items.map((o) => ({
            ...o,
            pictureUrl: o.pictureUrl.replace(
              environment.apiBaseUrl.substring(0, environment.apiBaseUrl.length-3),
              ''
            )
          }))
        };
          console.log(this.orderDetail)
        }
      }
    )
  }

}
