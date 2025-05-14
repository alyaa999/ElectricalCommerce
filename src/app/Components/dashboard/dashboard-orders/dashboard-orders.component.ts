import { Component } from '@angular/core';
import { GetOrdersService } from '../../../Service/get-orders.service';
import { DashboardOrderDetail, Item } from '../../../Interfaces/Orders/Order.models';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard-orders',
  imports: [CommonModule],
  templateUrl: './dashboard-orders.component.html',
  styleUrl: './dashboard-orders.component.css'
})
export class DashboardOrdersComponent {

  orders: DashboardOrderDetail[] = [];
  selectedOrder: DashboardOrderDetail = {
    id: 0,
    buyerEmail: '',
    orderDate: '',
    status: '',
    shippingAddress: {
      firstName: '',
      lastName: '',
      street: '',
      city: '',
      country: ''
    },
    deliveryMethod: '',
    deliveryMethodCost: 0,
    items: [],
    subTotal: 0,
    total: 0
  };



  showDetailsModal = false;
  loading = true;

  constructor(private ordersService: GetOrdersService) { }

  ngOnInit(): void {
    this.loadOrders();
  }

  loadOrders(): void {
    this.loading = true;
    this.ordersService.getAllOrders().subscribe({
      next: (data) => {
        this.orders = data;
        this.loading = false;
      },
      error: (err) => {
        console.error('Error loading orders:', err);
        this.loading = false;
      }
    });
  }

  openDetailsModal(order: DashboardOrderDetail): void {
    this.selectedOrder = { ...order };
    this.showDetailsModal = true;
  }

  closeDetailsModal(): void {
    this.showDetailsModal = false;
  }

  calculateItemTotal(item: Item): number {
    return item.price * item.quantity;
  }

}
