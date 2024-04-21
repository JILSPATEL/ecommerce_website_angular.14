// track-order.component.ts

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from 'src/app/services/product.service';
import { order } from 'src/app/data-type';

@Component({
  selector: 'app-track-order',
  templateUrl: './track-order.component.html',
  styleUrls: ['./track-order.component.css']
})
export class TrackOrderComponent {
  trackForm: FormGroup;
  orderDetails: order | null = null;
  orderFound: boolean = false;
  loading: boolean = false;

  constructor(private formBuilder: FormBuilder, private productService: ProductService) {
    this.trackForm = this.formBuilder.group({
      orderId: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.trackForm.controls['orderId'].invalid && (this.trackForm.controls['orderId'].dirty || this.trackForm.controls['orderId'].touched)) {
      // Show error message if the form is touched/dirty but not filled
      this.orderFound = false;
    } else {
      // Form is valid, proceed to fetch order details
      const orderId = this.trackForm.value.orderId;
      this.loading = true;
      this.productService.getOrderDetailsById(orderId).subscribe(
        (order: order) => {
          this.orderDetails = order;
          this.orderFound = true;
          this.loading = false;
        },
        (error) => {
          console.error("Error fetching order details:", error);
          this.orderFound = false;
          this.loading = false;
        }
      );
    }
  }

}
