import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { order } from '../data-type';

@Component({
  selector: 'app-seller-order',
  templateUrl: './seller-order.component.html',
  styleUrls: ['./seller-order.component.css']
})
export class SellerOrderComponent implements OnInit {
  orders: order[] = [];
  selectedStatus: string = '';
  orderStatusOptions: string[] = ['inprogress', 'Packed', 'shipped', 'delivered']; // Define orderStatusOptions

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.fetchOrderDetails();
  }

  fetchOrderDetails() {
    this.productService.getOrderDetails().subscribe(
      (data: order[]) => {
        this.orders = data;
      },
      (error) => {
        console.error('Error fetching order details:', error);
      }
    );
  }

  updateOrderStatus(orderId: string) {
    const updatedOrder = this.orders.find(order => order.id === orderId);
    if (updatedOrder) {
      updatedOrder.orderStatus = this.selectedStatus;
      this.productService.updateOrderStatus(updatedOrder).subscribe(
        (response: any) => {
          console.log('Order status updated successfully:', response);
          // Optionally, you can refresh the order list after successful update
          // this.fetchOrderDetails();
        },
        (error: any) => {
          console.error('Error updating order status:', error);
        }
      );
    } else {
      console.error('Order not found for id:', orderId);
    }
  }
}
