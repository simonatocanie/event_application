import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router } from "@angular/router";
import { EventsService } from "src/app/shared/services/events.service";


@Injectable({
    providedIn:'root'
})
export class EventRouterActivator implements CanActivate{
 constructor(private eventService: EventsService, private router: Router){}

 canActivate(route: ActivatedRouteSnapshot): boolean{

    const event= this.eventService.getEvent(+route.params['id']);

    // if(event==undefined){
    //   this.router.navigate(['/404'])
    // }


    console.log(event)
  return event !== undefined;
 }
}