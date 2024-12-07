import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-registeredstudents',
  templateUrl: './registeredstudents.component.html',
  styleUrls: ['./registeredstudents.component.css'], // Fixed typo in styleUrls
})
export class RegisteredstudentsComponent {
  eventId: string = ''; // Input for Event ID
  students: any[] = []; // Array to store the students
  submitted: boolean = false;

  constructor(private http: HttpClient) {}

  fetchRegisteredStudents() {
    if (!this.eventId) {
      alert('Please enter an Event ID.');
      return;
    }

    // Send `eventId` as a query parameter
    this.http
      .get(`http://localhost:3000/api/registeredstudents`, {
        params: { eventid: this.eventId }, // Pass eventId as query parameter
      })
      .subscribe(
        (response: any) => {
          this.students = response.data || []; // Access the data field from the response
          this.submitted = true;
        },
        (error) => {
          console.error('Error fetching students:', error);
          this.students = [];
          this.submitted = true;
        }
      );
  }
}
