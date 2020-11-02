import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuoteCOComponent } from './quote-co/quote-co.component';
import { QuoteDetailsComponent } from './quote-details/quote-details.component';
import { HighlightDirective } from './highlight.directive';
import { DateCountPipe } from './date-count.pipe';
import { UpvoteCountPipe } from './upvote-count.pipe';

@NgModule({
  declarations: [
    AppComponent,
    QuoteCOComponent,
    QuoteDetailsComponent,
    HighlightDirective,
    DateCountPipe,
    UpvoteCountPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
