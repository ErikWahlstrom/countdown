export class WorkingDay {
  Date: Date;
  IsWorkingDay: boolean;
  constructor(date: Date, isWorkingDay: boolean) {
    this.Date = date;
    this.IsWorkingDay = isWorkingDay;
  }
}
