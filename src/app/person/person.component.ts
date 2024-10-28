import { Component } from '@angular/core';

interface Person {
  id: number;
  name: string;
  surname: string;
  idNumber: string;
  dateOfBirth: string;
  userId: number;
}

@Component({
  selector: 'app-person',
  standalone: true,
  imports: [],
  templateUrl: './person.component.html',
  styleUrl: './person.component.css'
})
export class PersonComponent {

}
