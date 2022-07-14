import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit  {

  timeLeft: number = 60;
  interval:any;
  text:boolean = false;
  
 
  startTimer() {}

  ngOnInit(): void {
    this.interval = setInterval(() => {
      if(this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        this.timeLeft = 60;
      }
    },1000)
    setInterval(() =>{
      this.text = !this.text
    },60000)
  }

  

}


 


  


