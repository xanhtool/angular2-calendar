import { Component, ChangeDetectionStrategy  } from '@angular/core';
import { isSameMonth, isSameDay, startOfMonth, endOfMonth, startOfWeek, endOfWeek, startOfDay, endOfDay, format } from 'date-fns';
import { CalendarEvent } from 'angular-calendar';
import { colors } from './demo-utils/colors';
import { Http, URLSearchParams } from '@angular/http';
import { EventService } from './services/event.service';

interface Film {
  id: number;
  title: string;
  release_date: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  events: any;
  view: string = 'month';
  activeDayIsOpen: boolean = false;
  viewDate: Date = new Date();

  constructor(
    private eventService: EventService,
    private http: Http
  ) {
    // get Event
    this.eventService.getEvents()
    .subscribe( events => {
      console.log(this.events);
    })

    this.events = [{
      title: 'An event',
      start: new Date(1483462800000),
      color: colors.yellow
    },
    {
      title: 'An event 2',
      start: new Date(1483635600000),
      color: colors.red
    },
    {
      title: 'An event 3',
      start: new Date(1485018000000),
      color: colors.red
    }];

  }

  dayClicked({date, events}: {date: Date, events: CalendarEvent[]}): void {

      if (isSameMonth(date, this.viewDate)) {
        if (
          (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
          events.length === 0
        ) {
          this.activeDayIsOpen = false;
        } else {
          this.activeDayIsOpen = true;
          this.viewDate = date;
        }
      }
    }


}
