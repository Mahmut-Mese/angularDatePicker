import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Booking } from '../../model/booking';
@Component({
  selector: 'book-date-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
})
export class BookComponent implements OnInit {
  books: any;
  pickedDate: any;
  selectedDay: any;
  ngOnInit() {
    this.getAllitems();
  }
  private host = 'http://localhost:3000';
  booking: Booking = new Booking();

  constructor(private http: HttpClient) {}
  getAllitems() {
    return this.http
      .get<Booking[]>(this.host + '/summary/')
      .subscribe((items) => {
        this.books = items;
      });
  }
  addItem(booking: Booking) {
    return this.http.post(this.host + '/summary', booking);
  }

  addOneBook(event) {
    event.preventDefault();
    var newBook = {
      name: this.booking.name,
      reason: this.booking.reason,
      year: this.pickedDate.year,
      month: this.pickedDate.month,
      day: this.pickedDate.day,
      dayName: this.pickedDate.dayName,
      id: this.booking.id,
    };
    this.booking.name = '';
    this.booking.reason = '';
    this.addItem(newBook).subscribe((book) => {
      this.getAllitems();
    });
  }
  dateFunction(data) {
    this.pickedDate = data;
  }
}
