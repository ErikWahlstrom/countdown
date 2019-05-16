import { Component } from '@angular/core';
import { timer } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'countdown';
  endDate = new Date(2019, 7, 14, 16, 0, 0, 0);
  timeLeft: number;
  source: any;

  constructor() {
    this.source = timer(0, 1000);
    const msToDays = 1000 * 3600 * 24;
    const subscribe = this.source.subscribe(val => this.timeLeft = (this.endDate.getTime() / msToDays) - (new Date().getTime()) / msToDays);
  }
}
