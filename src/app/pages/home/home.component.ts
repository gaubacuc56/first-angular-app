import { Component } from '@angular/core';
interface Human {
  name: string,
  age: number
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {
  name: string = 'Angular'
  handleClick(name: string) {
    console.log(name)
  }
  array: Human[] = [
    {
      name: 'John',
      age: 40
    },
    {
      name: 'Josh',
      age: 60
    },
    {
      name: 'Wendy',
      age: 20
    },
    {
      name: 'Sarah',
      age: 26
    }
  ]
}
