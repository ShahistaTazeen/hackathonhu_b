import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router'; 
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {
  studentName: string = '';
  studentEmail: string = '';
  eventName: string = ''; // Will hold the event name from the URL
  isSuccess: boolean = false; 
  constructor(private route: ActivatedRoute,private http: HttpClient, // ActivatedRoute to access URL parameters
    private router: Router) {}

  ngOnInit(): void {this.route.params.subscribe(params => {
    this.eventName = params['eventName'];  // Capture the event name from the URL
  });}

  onSubmit() {
    if (this.studentName && this.studentEmail) {
      // Make POST request to save the data
      const payload = {
        studentName: this.studentName,
        studentEmail: this.studentEmail,
        eventName: this.eventName
      };

      this.http.post('http://localhost:3000/api/registeredstudents', payload).subscribe(
        response => {
          alert(`Registration to ${this.eventName} is successful!`);
          this.studentName = '';
          this.studentEmail = '';
        },
        error => {
          console.error('Error during registration:', error);
          alert('An error occurred while registering. Please try again.');
        }
      );
    }
  }
}
