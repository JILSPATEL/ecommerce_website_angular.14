import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {
  name: string = '';
  email: string = '';
  message: string = '';
  submitted: boolean = false;

  constructor(private http: HttpClient) { }

  submitForm() {
    const formData = {
      name: this.name,
      email: this.email,
      message: this.message
    };

    this.http.post('http://localhost:3000/contact-us', formData)
      .subscribe((response) => {
        console.log('Form submitted successfully!', response);
        this.submitted = true;
        this.resetForm();
        window.alert('Data sent successfully!');
      }, (error) => {
        console.error('Error submitting form:', error);
        // Handle error if necessary
      });
  }

  resetForm() {
    this.name = '';
    this.email = '';
    this.message = '';
  }
}
