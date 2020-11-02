import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quote-co',
  templateUrl: './quote-co.component.html',
  styleUrls: ['./quote-co.component.css']
})
export class QuoteCOComponent implements OnInit {
  quote: Quotes[]  = [
    new Quotes(1, 'Watch finding Nemo', 'Find an online version and watch merlin find his son'),
    new Quotes(2,'Buy Cookies','I have to buy cookies for the parrot'),
    new Quotes(3,'Get new Phone Case','Diana has her birthday coming up soon'),
    new Quotes(4,'Get Dog Food','Pupper likes expensive snacks'),
    new Quotes(5,'Solve math homework','Damn Math'),
    new Quotes(6,'Plot my world domination plan','Cause I am an evil overlord'),
  ];


  toggleDetails(index){
    this.quote[index].showDescription = !this.quote[index].showDescription;
  }
  completeGoal(isComplete, index){
    if (isComplete) {
      this.quote.splice(index,1);
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
