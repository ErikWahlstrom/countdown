import { Component } from '@angular/core';
import { timer } from 'rxjs';
import { WorkingDay } from './WorkingDay';

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
  workingDaysLeftArray: WorkingDay[];
  today: Date;

  constructor() {
    this.source = timer(0, 1000);
    const msToDays = 1000 * 3600 * 24;
    const subscribe = this.source.subscribe(val => {
      const now = new Date();
      this.today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
      this.timeLeft = (this.endDate.getTime() / msToDays) - (this.today.getTime() / msToDays);
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
      ].filter(x => x > this.today);
      this.workingDaysLeft = this.timeLeft - (nonworkingDays.length);
      const wholeDaysLeft = Math.round(this.timeLeft);
      this.workingDaysLeftArray = [];
      for (let i = 1; i <= wholeDaysLeft; i++) {
        const nextDay = new Date(new Date(this.today.getFullYear(), this.today.getMonth(), this.today.getDate() + i));
        this.workingDaysLeftArray.push(
          new WorkingDay(
            nextDay,
            !nonworkingDays.some(x => (x.getDate() === nextDay.getDate())  && (x.getMonth() === nextDay.getMonth()))));
      }
    });
  }
}


