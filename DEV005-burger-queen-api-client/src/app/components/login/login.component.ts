import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ServicesService } from 'src/app/services/services.service';
import { Credentials } from 'src/app/models/login.interface';
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

  constructor(private auth: ServicesService, private router: Router) { }

  onLogin(credentials: Credentials) {
    this.formSubmitted
    //Suscribe indica qué se hace una vez que la respuesta es correcta
    this.auth.loginByEmail(credentials).subscribe((response) => {

      this.auth.token = response.accessToken;
      this.auth.id = response.user.id.toString();
      this.auth.role = response.user.role;

      localStorage.setItem('accesToken', this.auth.token);
      localStorage.setItem('role', this.auth.role);
      localStorage.setItem('id', this.auth.id.toString());

      if (this.auth.role === 'admin'){
        this.router.navigate(['admin-component']);
      } else if(this.auth.role === 'waiter') {
        this.router.navigate(['waiter-component']);
      } else if(this.auth.role === 'cook') {
        this.router.navigate(['cook-component']);
      }

    })
    console.log(credentials);


  }
}
