import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of, tap } from "rxjs";
import { Event } from '../../shared/models/event.model'


@Injectable({
  providedIn: 'root'
})
export class EventsService {

  constructor(private http: HttpClient) { }
  events!: Event[];

  getEvents(): Observable<Event[]> {

    if (this.events?.length) {
      return of(this.events)
    }

    return this.http.get<Event[]>('assets/data/data.json')
      .pipe(tap((data: Event[]) => {
        this.events = data;
        console.log(this.events)
      }));
  }

  getEvent(id: number): Event | undefined {
    // console.log(id)
    // console.log(this.events)

    if (this.events === undefined) {
      this.getEvents().subscribe(x => { });
    }

    console.log(this.events)
    return this.events?.find(x => x.id === id);
  }

  saveEvent(event: Event): void {
    event.id = 999;
    console.log(event)
    event.sessions = [];
    this.events.push(event)
    console.log(this.events)
  }

  updateEvent(event: Event | undefined): void {
    if (event !== undefined) {
      let index = this.events.findIndex(x => x.id == event?.id);
      this.events[index] = event;
    }
  }
}