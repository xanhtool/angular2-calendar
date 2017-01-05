import { Injectable } from '@angular/core';
import 'rxjs/Rx';
import { Http } from '@angular/http';
@Injectable()
export class EventService {
  eventsUrl: string;
  constructor(
    private http: Http
  ) {
    this.eventsUrl = 'http://dev.i-tabi.jp/api/event/';
  }

  getEvents(){
    return this.http.get(this.eventsUrl+'find')
    .map(res=>res.json());
  }

}
