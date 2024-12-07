import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BearpassService } from '../bearpass.service';
@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  searchQuery: string = '';
  events: any[] = [];
  searchResults: any[] = [];
  favorites: Set<string> = new Set(); // Track favorite events
  upcomingEvents: any[] = []; // Notifications for upcoming events
  notificationsVisible: boolean = false; 
  constructor(private http: HttpClient, private router: Router,private mid:BearpassService) {}
  studentMid: string | null = null;
  ngOnInit(): void {
    this.fetchEvents();
    this.studentMid = this.mid.getMid();
  }
  
  fetchEvents() {
    this.http.get('http://localhost:3000/api/events').subscribe((response: any) => {
      this.events = response.data || [];
      this.checkUpcomingEvents();
    });
  }

  checkUpcomingEvents() {
    const today = new Date();
    const tenDaysFromNow = new Date(today);
    tenDaysFromNow.setDate(today.getDate() + 10);

    // Filter events with registration deadlines within 10 days
    this.upcomingEvents = this.events.filter(event => {
      const registrationEndDate = new Date(event.date);
      return registrationEndDate <= tenDaysFromNow && registrationEndDate >= today;
    });
  }

  toggleNotifications() {
    this.notificationsVisible = !this.notificationsVisible;
    console.log('Notifications dropdown visible:', this.notificationsVisible);
  }
  

  performSearch() {
    const query = this.searchQuery.toLowerCase().trim();
    if (!query) {
      this.searchResults = [];
      return;
    }

    this.searchResults = this.events.filter(event => {
      return (
        (event.eventname && event.eventname.toLowerCase().includes(query)) ||
        (event.organizername && event.organizername.toLowerCase().includes(query)) ||
        (event.prizemoney && event.prizemoney.toString().includes(query)) ||
        (event.date && new Date(event.date).toLocaleDateString().includes(query))
      );
    });
  }

  registerEvent(eventName: string) {
    console.log('Navigating to register for event:', eventName);
    this.router.navigate([`/events/${eventName}/register`]);
  }
  

  viewWinners() {
    this.router.navigate(['winners']);
  }
  
  
}
