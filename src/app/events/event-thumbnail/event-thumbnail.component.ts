import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Event } from '../../shared/models/event.model'

@Component({
  selector: 'app-event-thumbnail',
  templateUrl: './event-thumbnail.component.html',
  styles: [`
  .pad-left { margin-left:10px; }
  .well div {color: #bbb; }
  .green{color: #003300 !important;}
  .red{color:#b30000 !important;}
  .bold {font-weight: bold; }
  `]
})
export class EventThumbnailComponent {
  @Input() event!: Event;

  getStartTime(){
    // const isEarlyStart = this.event && this.event.time == '8:00 am';
    // return {green: isEarlyStart, bold: isEarlyStart};  -- the return type can be object

    if( this.event && this.event.time == '8:00 am'){
      return 'green bold'  //-- the return type can be string or array of string, else empty array
    }

    if( this.event && this.event.time == '10:00 am'){
      return 'red bold'  //-- the return type can be string or array of string, else empty array
    }
    return '';
  }
}
