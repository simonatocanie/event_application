import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-edit-user-profile',
  templateUrl: './edit-user-profile.component.html',
  styles: [`
  em {color:#E05C65; float:right; padding-left: 10px;}
  .error input{background-color: #E05C65; }
  .error ::webkit-input-placeholder {color: #999;}
  .error ::-moz-placeholder {color: #999;}
  .error :-moz-placeholder {color: #999;}
  .error :ms-input-placeholder {color: #999;}
  `]
})
export class EditUserProfileComponent implements OnInit {
  profileForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.profileForm = this.formBuilder.group({
      firstName: [this.authService.currentUser?.firstName, [Validators.required, Validators.pattern('[a-zA-Z].*')]],
      lastName: [this.authService.currentUser?.lastName, [Validators.required]]
    });
  }

  saveProfile(): void {
    console.log(this.profileForm.value)
    if (this.profileForm.valid) {
      this.authService.updateCurrentUser(this.profileForm.value);
      this.router.navigate(['events/list'])
    }
  }

  cancel(): void {
    this.router.navigate(['events/list'])
  }

  validateField(field: string): boolean | undefined {
    let formControl = this.profileForm.get(field);
 console.log(formControl)
    return formControl?.valid || formControl?.touched;
  }
}
