import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [`
  em {color:#E05C65; float:right; padding-left: 10px;}`
  ]
})
export class LoginComponent implements OnInit {
  userForm!: FormGroup;
  mouseOverLogin: boolean = false;

  constructor(private formBuilder: FormBuilder, private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      userName: ['', [Validators.required]],
      password: ['', [Validators.required]],
    })
  }

  login(): void {
    this.auth.loginUser(this.userForm.get('userName')?.value, this.userForm.get('password')?.value);
    this.router.navigate(['events/list'])
  }

  cancel(): void {
    this.router.navigate(['events/list'])
  }
}
