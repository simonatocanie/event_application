import { inject } from "@angular/core";
import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from "@angular/router";
import { map } from "rxjs";
import { EventsService } from "src/app/shared/services/events.service";


export const eventListResolver: ResolveFn<any> =
    () => {
      return inject(EventsService).getEvents().pipe(map(events=> events));
    };