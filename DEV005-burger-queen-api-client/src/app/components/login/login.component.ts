import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ServicesService } from 'src/app/services/services.service';
import { LoginI } from 'src/app/models/login.interface';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm: FormGroup = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  })
  public formSubmitted = false;

  constructor(private api: ServicesService, private router:Router) { }

  onLogin(form: LoginI) {
    this.api.loginByEmail(form).subscribe((data) => {
      this.api.token = data.accessToken
      console.log(this.api.token);
      console.log(data);
    })
    console.log(form);
    this.formSubmitted

  }
}
