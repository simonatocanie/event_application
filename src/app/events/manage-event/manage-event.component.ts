import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Event } from 'src/app/shared/models/event.model';
import { EventsService } from 'src/app/shared/services/events.service';

@Component({
  selector: 'app-manage-event',
  templateUrl: './manage-event.component.html',
  styles: [`
  em {color:#E05C65; float:right; padding-left: 10px;}
  .error input{background-color: #E05C65; }
  .error ::webkit-input-placeholder {color: #999;}
  .error ::-moz-placeholder {color: #999;}
  .error :-moz-placeholder {color: #999;}
  .error :ms-input-placeholder {color: #999;}
  `]
})
export class ManageEventComponent implements OnInit {
  isDirty: boolean = false;
  eventForm!: FormGroup;
  event!: Event | undefined;

  constructor(private router: Router, private formBuilder: FormBuilder, private eventService: EventsService) {
  }


  ngOnInit(): void {
    //this.event= this.eventService.getEvent(1);

    this.eventForm = this.formBuilder.group({
      name: [this.event?.name, [Validators.required]],
      date: [this.event?.date, [Validators.required]],
      time: [this.event?.time, [Validators.required]],
      price: [this.event?.price, [Validators.required]],
      imageUrl: [this.event?.imageUrl, [Validators.required, Validators.pattern('.*\/.*.(png|jpg)')]],
      location: this.formBuilder.group({
        address: [this.event?.location?.address],
        city: [this.event?.location?.city],
        country: [this.event?.location?.country]
      }),
      onlineUrl: ['']
    })
  }

  cancel(): void {
    this.router.navigate(['/events/list'])
  }

  validateField(field: string): boolean | undefined {
    let formControl = this.eventForm.get(field);
    console.log(formControl)
    return formControl?.valid || (formControl?.untouched && formControl?.pristine);
  }

  saveEvent(): void {
     this.eventService.saveEvent(this.eventForm.value);
     this.isDirty= false;
     this.router.navigate(['/events/list'])
  }
}
