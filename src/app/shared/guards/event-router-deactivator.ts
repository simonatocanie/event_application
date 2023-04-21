import { ManageEventComponent } from "src/app/events/manage-event/manage-event.component";


export function checkDirtyState(component: ManageEventComponent): boolean {

    if (component.isDirty) {
        return window.confirm('You have not saved this event, do you really want to cancel?');
    }

    return true;
}