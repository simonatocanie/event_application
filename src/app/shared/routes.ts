import { Routes } from "@angular/router"
import { EventDetailsComponent } from "../events/event-details/event-details.component"
import { EventListComponent } from "../events/event-list/event-list.component"
import { ManageEventComponent } from "../events/manage-event/manage-event.component"
import { Error404Component } from "./components/errors/404/404.component"
import { EditUserProfileComponent } from "../users/edit-user-profile/edit-user-profile.component"
import { EventRouterActivator } from "./guards/event-router-activator"
import { checkDirtyState } from "./guards/event-router-deactivator"
import { eventListResolver } from "./resolver/event-list.resolver"
import { LoginComponent } from "../users/login/login.component"
import { CreateSessionComponent } from "../events/sessions/create-session/create-session.component"

export const appRoutes: Routes=[
    {path:'404', component:Error404Component, pathMatch: 'full'},
]

export const eventRoutes: Routes=[
    {path:'events/new', component: ManageEventComponent, canDeactivate:[checkDirtyState]},
    {path:'events/list', component: EventListComponent, resolve:{events: eventListResolver}},
    {path:'events/:id', component: EventDetailsComponent, canActivate:[EventRouterActivator]},
    {path:'events/sessions/new', component: CreateSessionComponent, canDeactivate:[checkDirtyState]},
    {path:'', redirectTo:'list', pathMatch: 'full'}
]

export const userRoutes : Routes=[
    {path:'users/profile', component:EditUserProfileComponent},
    {path:'users/login', component:LoginComponent}
]