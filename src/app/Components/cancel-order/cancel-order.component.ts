import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CheckoutService } from '../../Service/checkout.service';

@Component({
  selector: 'app-cancel-order',
  templateUrl: './cancel-order.component.html',
  styleUrls: ['./cancel-order.component.css']
})
export class CancelOrderComponent implements OnInit {
  orderId: string | null = null;

  constructor(private route: ActivatedRoute , private  checkout : CheckoutService) {}

  ngOnInit(): void {
    this.orderId = this.route.snapshot.queryParamMap.get('orderId');

    if (this.orderId) {
      console.log('Canceling order with ID:', this.orderId);
    }
    this.checkout.DeleteOrder(this.orderId).subscribe({});
      
    
  }
}
