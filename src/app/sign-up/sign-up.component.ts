import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, AbstractControl, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { passwordMatch } from 'src/Validators/passwordMatched';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  submitted = false
  constructor(private router: Router) { }
  signUp = new FormGroup({
    email: new FormControl('', [Validators.required,Validators.email]),
    password: new FormControl('', [Validators.required]),
    cnfpassword: new FormControl('', [Validators.required]),
  }, [passwordMatch("password", "cnfpassword")])
  ngOnInit(): void {

  }
  getControl(pass: any): AbstractControl | null {
    return this.signUp.get(pass)
  }
  get signupControl() {
    return this.signUp.controls
  }
  signupForm() {
    window.localStorage.setItem("signUpData", JSON.stringify(this.signUp.value))
    console.log("value", this.signUp.value)
    if (this.signUp.value.email && this.signUp.value.password && this.signUp.value.cnfpassword) {
      this.router.navigate(['/signin'])
    }else{
      alert("please fill all details")
    }
  }

}
