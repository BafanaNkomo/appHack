import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

interface User {
  userid: number;
  name: string;
  age: number;
  usertype: string;
}

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit {
  users: User[] = [];

  constructor(private http: HttpClient) {
    console.log('HttpClient injected:',this.http);
  }

  ngOnInit() {
    console.log('Component initialized');
    this.fetchUsers();
  }

  fetchUsers() {
    console.log('Fetching users...');
    this.http.get<User[]>('https://localhost:7145/users')
      .subscribe({
        next: (data) => {
          console.log('Received data:', data);
          this.users = data;
        },
        error: (error) => {
          console.error('Error fetching users:', error);
          if (error.error instanceof ErrorEvent) {
            console.error('Client-side error:', error.error.message);
          } else {
            console.error(`Backend returned code ${error.status}, body was:`, error.error);
          }
        }
      });
  }
}

