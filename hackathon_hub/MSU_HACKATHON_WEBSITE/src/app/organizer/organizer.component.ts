import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-organizer',
  templateUrl: './organizer.component.html',
  styleUrls: ['./organizer.component.css']
})
export class OrganizerComponent {
  organizerName = '';
  eventName = '';
  eventID = '';
  description = '';
  prizeMoney = '';
  location = '';
  date = '';
  time = '';

  constructor(private http: HttpClient, private router: Router) {}

  postEvent() {
    const eventData = {
      organizername: this.organizerName,
      eventname: this.eventName,
      eventid: this.eventID,
      description: this.description,
      prizemoney: this.prizeMoney,
      location: this.location,
      date: this.date,
      time: this.time,
    };

    console.log('Submitting event:', eventData);

    this.http.post("http://localhost:3000/api/events", eventData).subscribe(
      (resultData: any) => {
        console.log(resultData);
        alert('Posted Successfully');
        this.resetForm();
      },
      (error) => {
        console.error('Error:', error);
        alert("Posted Successfully")
      }
    );
  }
  resetForm() {
  this.organizerName = '';
  this.eventName = '';
  this.eventID = '';
  this.description = '';
  this.prizeMoney = '';
  this.location = '';
  this.date = '';
  this.time = '';
  }
}
