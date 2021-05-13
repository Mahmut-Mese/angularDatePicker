import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import {
  NgbCalendar,
  NgbDate,
  NgbDateStruct,
} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'book-date-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss'],
})
export class DatePickerComponent implements OnInit {
  @Output() dateFunction: EventEmitter<any> = new EventEmitter();
  // model: NgbDateStruct;
  private _model: NgbDate;
  date: { year: number; month: number };
  weekDays = {
    1: 'Monday',
    2: 'Tuesday',
    3: 'Wednesday',
    4: 'Thursday',
    5: 'Friday',
    6: 'Satarday',
    7: 'Sunday',
  };
  constructor(private calendar: NgbCalendar) {}
  selectedDay: string = '';
  set model(val) {
    this._model = val;
    this.selectedDay = this.weekDays[this.calendar.getWeekday(this.model)];
  }

  get model() {
    return this._model;
  }
  ngOnInit() {
    // this.dateFunction.emit(this.model);
  }
  sendData() {
    const source = { dayName: this.selectedDay };

    const returnedTarget = Object.assign(this.model, source);

    this.dateFunction.emit(returnedTarget);
  }
}
