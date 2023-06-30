import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, EmailValidator } from '@angular/forms'
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {

  submitted = false
  constructor(private router: Router) { }
  signIn = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  })
  signupData = window.localStorage.getItem('signUpData');
  ngOnInit(): void {
    console.log("data", this.signupData)
  }

  get signinControl() {
    return this.signIn.controls
  }
  signinForm() {
    const values=this.signIn.value
    const storedValue = localStorage.getItem('signUpData');
    const signInData = window.localStorage.setItem('SignInData', JSON.stringify(this.signIn.value))
    const getSignInData=window.localStorage.getItem('signInData')
    console.log("value", this.signIn.value)
    if (this.signIn.value.email && this.signIn.value.password) {
      this.router.navigate(['/contact'])
    } else {
      alert("please fill valid user")
    }
      
  }

  
}

