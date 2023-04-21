import { Component, OnInit } from '@angular/core';
import { Event } from 'src/app/shared/models/event.model';
import { EventsService } from 'src/app/shared/services/events.service';
import { ToastrService } from 'src/app/shared/services/toastr.service';


@Component({
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {
  events!: Event[];
  constructor(private eventService: EventsService, private toastr: ToastrService) {
  }

  ngOnInit(): void {
    setTimeout(() => { //only for testing
      this.eventService.getEvents().subscribe(data => { 
        this.events = data;
      })
    }, 100);
  }

  handleClickMessage(eventName:string):void{
     this.toastr.success(eventName)
  }
}
