import { Component } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  username = "";
  email = "";
  password = "";
  confirmpassword = "";
  errorMsg = "";

  signup() {
    // Perform form validation and submission logic here
    if (!this.username || !this.email || !this.password || !this.confirmpassword) {
      this.errorMsg = 'All fields are required';
      return;
    }

    if (this.password !== this.confirmpassword) {
      this.errorMsg = 'Password and Confirm Password do not match';
      return;
    }

    // Submit the form data to backend or perform other actions
    console.log('Form submitted successfully!');
    console.log('Username:', this.username);
    console.log('Email:', this.email);
    console.log('Password:', this.password);
    console.log('Confirm Password:', this.confirmpassword);
  }
}
