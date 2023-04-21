import { Component, Input } from '@angular/core';
import { Session } from 'src/app/shared/models/session.model';

@Component({
  selector: 'app-session-list',
  templateUrl: './session-list.component.html'
})
export class SessionListComponent {
  @Input() sessions!: Session[] | undefined;
  constructor(){
    console.log(this.sessions)
  }
}
