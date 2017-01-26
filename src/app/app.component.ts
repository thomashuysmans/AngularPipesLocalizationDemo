import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  
  dateOfToday: Date;
  amount: Number;

  constructor(){ }

  ngOnInit(){
    this.dateOfToday = new Date();
    this.amount = 1145.55;
  }

}
