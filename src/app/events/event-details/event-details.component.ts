import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventsService } from 'src/app/shared/services/events.service';
import { Event } from '../../shared/models/event.model'
import { Session } from 'src/app/shared/models/session.model';

@Component({
  templateUrl: './event-details.component.html',
  styles: [`
    .event-image {height: 100px;}
  `]
})
export class EventDetailsComponent implements OnInit {
  event?: Event | undefined;
  addMode :boolean= false;

  constructor(private eventsService: EventsService, private router: ActivatedRoute) {
  }

  ngOnInit(): void {
    console.log(this.router)
    let id = +this.router.paramMap.forEach((x: any)=> console.log(x.params['id']))
    console.log(id)
    this.event = this.eventsService.getEvent(1);
  }

  addSession(): void {
   this.addMode = true;
  }

  saveNewSession(session: Session): void{
    console.log('test')
    console.log(session)

    var sessionsId = this.event?.sessions?.map(x=> x.id);
    const nextId = Math.max.apply(null, sessionsId ?? [])
    session.id = nextId+1;

    this.event?.sessions?.push(session)
    this.eventsService.updateEvent(this.event)
    this.addMode = false;
  }
}
