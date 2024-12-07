import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.css'] // Use styleUrls instead of styleUrl
})
export class SelectorComponent implements OnInit {
  role: string = ''; // Initialize the role as a string
  constructor(private router: Router) {}

  ngOnInit(): void {}

  goToRolePage(): void {
    if (this.role === 'organizer') {
      this.router.navigate(['/organizer']);
    } else if (this.role === 'student') {
      this.router.navigate(['/login']);
    }
  }
}
