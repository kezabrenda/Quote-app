import { Component } from '@angular/core';
import { faThumbsUp, faThumbtack, faHashtag } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'font-awesome-angular';
  faThumbsUp = faThumbsUp;
  faThumbtack = faThumbtack;
  faHashtag = faHashtag;
}
