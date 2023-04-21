import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Session } from 'src/app/shared/models/session.model';
import { restrictedWords } from 'src/app/shared/validators/restricted.validator';

@Component({
  selector: 'app-create-session',
  templateUrl: './create-session.component.html',
  styles: [`
  em {color:#E05C65; float:right; padding-left: 10px;}
  .error input{background-color: #E05C65; }
  .error ::webkit-input-placeholder {color: #999;}
  .error ::-moz-placeholder {color: #999;}
  .error :-moz-placeholder {color: #999;}
  .error :ms-input-placeholder {color: #999;}
  `]
})
export class CreateSessionComponent implements OnInit {
  sessionForm!: FormGroup;
  @Output() saveSessionEvent: EventEmitter<Session> = new EventEmitter<Session>();

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.sessionForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      presenter: ['', [Validators.required]],
      duration: ['', [Validators.required]],
      level: ['', [Validators.required]],
      abstract: ['', [Validators.required, Validators.maxLength(400), restrictedWords(['test', 'another'])]],
      voters: this.formBuilder.array(
        []
      )
    });
  }

  validateField(field: string): boolean | undefined {
    let formControl = this.sessionForm.get(field);
    return formControl?.valid || (formControl?.untouched && formControl?.pristine);
  }

  cancel():void{

  }

  saveSession(): void{
    console.log(this.sessionForm.value)
    this.saveSessionEvent.emit(this.sessionForm.value)
  }
}
