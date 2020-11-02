import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {

  @Input() quote: Quotes;
  @Output() isComplete = new EventEmitter<boolean>();
  @Output() isDelete = new EventEmitter<boolean>();

  quoteComplete(complete:boolean){
    this.isComplete.emit(complete);
  }

  quoteDelete(Delete:boolean){
    this.isDelete.emit(Delete);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
