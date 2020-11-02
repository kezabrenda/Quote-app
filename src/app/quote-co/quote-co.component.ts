import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quote-co',
  templateUrl: './quote-co.component.html',
  styleUrls: ['./quote-co.component.css']
})
export class QuoteCOComponent implements OnInit {
  quote = [
    new Quotes(0, " ", " ",new Date(2020,11,1)),
    ];


  toggleDetails(index){
    this.quote[index].showDescription = !this.quote[index].showDescription;
  }

  addNewQuote(quote) {
    quote.postingDate = new Date();
    this.quote.push(quote);
    console.log(this.quote);
  }

  complete(isComplete, index){
    if (isComplete) {
      this.quote.splice(index,1);
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
