import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../../Service/orders.service';
import { OrderIndex } from '../../Interfaces/Orders/Order.models';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-orders',
  imports: [CommonModule,FormsModule,RouterModule],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.css'
})

export class OrdersComponent implements OnInit {
  orderIndexArr:OrderIndex[]=[]
  constructor(private orderService:OrdersService){
    
  }
  ngOnInit(): void {
    this.orderService.GetCustomerOrders().subscribe({
      next:(res)=>{
        this.orderIndexArr = res
      }
    })
  }

}
