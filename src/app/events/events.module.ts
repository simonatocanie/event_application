import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { EventListComponent } from "./event-list/event-list.component";
import { EventThumbnailComponent } from './event-thumbnail/event-thumbnail.component';
import { EventDetailsComponent } from './event-details/event-details.component';
import { RouterModule } from "@angular/router";
import { eventRoutes } from "../shared/routes";
import { ManageEventComponent } from './manage-event/manage-event.component';
import { SharedModule } from "../shared/shared.module";
import { CreateSessionComponent } from './sessions/create-session/create-session.component';
import { SessionListComponent } from './sessions/session-list/session-list.component';


@NgModule({
    imports: [
      CommonModule,

      RouterModule.forChild(eventRoutes),
      SharedModule
    ],
    declarations: [
      EventListComponent,
      EventThumbnailComponent,
      EventDetailsComponent,
      ManageEventComponent,
      CreateSessionComponent,
      SessionListComponent
    ],
    exports:[
      EventListComponent
    ]
  })

export class EventsModule {}