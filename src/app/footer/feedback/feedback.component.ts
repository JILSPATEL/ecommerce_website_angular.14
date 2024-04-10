import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent {
  customerName: string = '';
  rating: number = 1;
  productName: string = '';
  review: string = '';
  submitted: boolean = false;

  constructor(private http: HttpClient) { }

  submitFeedback() {
    const feedbackData = {
      customerName: this.customerName,
      rating: this.rating,
      productName: this.productName,
      review: this.review
    };

    this.http.post('http://localhost:3000/feedback', feedbackData)
      .subscribe((response) => {
        console.log('Feedback submitted successfully!', response);
        this.submitted = true;
        this.resetFeedbackForm();
        window.alert('Feedback sent successfully!');
      }, (error) => {
        console.error('Error submitting feedback:', error);
        // Handle error if necessary
      });
  }

  resetFeedbackForm() {
    this.customerName = '';
    this.rating = 0;
    this.productName = '';
    this.review = '';
  }
}
