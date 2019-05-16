import { Component } from '@angular/core';
import { timer } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'countdown';
  endDate = new Date(2019, 5, 14, 16, 0, 0, 0);
  timeLeft: number;
  source: any;
  workingDaysLeft: number;

  constructor() {
    this.source = timer(0, 1000);
    const msToDays = 1000 * 3600 * 24;
    const subscribe = this.source.subscribe(val => {
      this.timeLeft = (this.endDate.getTime() / msToDays) - (new Date().getTime() / msToDays);
      const nonworkingDays = [
        new Date(2019, 1, 18),
        new Date(2019, 4, 18),
        new Date(2019, 4, 19),
        new Date(2019, 4, 25),
        new Date(2019, 4, 26),
        new Date(2019, 4, 31),
        new Date(2019, 5, 1),
        new Date(2019, 5, 2),
        new Date(2019, 5, 6),
        new Date(2019, 5, 8),
        new Date(2019, 5, 9),
      ].filter(x => x > new Date());
      this.workingDaysLeft = this.timeLeft - (nonworkingDays.length);
  });
}
}
