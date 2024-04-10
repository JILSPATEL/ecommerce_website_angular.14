// seller-feedback.component.ts
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Feedback } from '../data-type';

@Component({
  selector: 'app-seller-feedback',
  templateUrl: './seller-feedback.component.html',
  styleUrls: ['./seller-feedback.component.css']
})
export class SellerFeedbackComponent implements OnInit {
  feedbackList: Feedback[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.fetchFeedbackData();
  }

  fetchFeedbackData() {
    this.http.get<Feedback[]>('http://localhost:3000/feedback')
      .subscribe((feedbackData) => {
        this.feedbackList = feedbackData;
      }, (error) => {
        console.error('Error fetching feedback data:', error);
        // Handle error if necessary
      });
  }
}
