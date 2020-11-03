import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quote-co',
  templateUrl: './quote-co.component.html',
  styleUrls: ['./quote-co.component.css']
})
export class QuoteCOComponent implements OnInit {
  quote = [
    new Quotes (0, 'Brenda KEZA', 'Mother Teresa', 'I can do things that you cannot do; you can do things that I cannot do. Together we make great things!', 0, 0,new Date(2020,11,2)),
    ];


  toggleDetails(index){
    this.quote[index].showDescription = !this.quote[index].showDescription;
  }

  addNewQuote(index,quote) {
    let quoteLength = this.quote.length;
    quote.id = quoteLength+1;
    quote.postingDate = new Date(quote.postingDate);
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
