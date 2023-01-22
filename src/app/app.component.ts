import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'trackBy';


  employee=[
  {
    name:"Manoj",
    age: 26,
    email:"manoj@gmail.com",
    salary: 25000
  },
  {
    name:"Sohan",
    age: 28,
    email:"sohan@gmail.com",
    salary: 28000
  },
  {
    name:"Shruti",
    age: 30,
    email:"sruti@gmail.com",
    salary: 35000
  }
]

// Load more employee
loadMoreEmployee():void{
 this.employee=[
    {
      name:"Manoj",
      age: 26,
      email:"manoj@gmail.com",
      salary: 25000
    },
    {
      name:"Sohan",
      age: 28,
      email:"sohan@gmail.com",
      salary: 28000
    },
    {
      name:"Shruti",
      age: 30,
      email:"sruti@gmail.com",
      salary: 35000
    },
    {
      name:"Suresh",
      age: 35,
      email:"suresh@gmail.com",
      salary: 45000
    },
    {
      name:"Bikash",
      age: 36,
      email:"bikash@gmail.com",
      salary: 55000
    },
  ]
}

getEmployeeUsingTrackBy(index:number,employee:any):string{
  return employee.name;
}


}
