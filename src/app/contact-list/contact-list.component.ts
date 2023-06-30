import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
declare var window:any

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  modal:any
  submitted:boolean=false;
  showCard:boolean=false;
  name: any
  email: any;
  phone: any;
  attach:any;

  contact=new FormGroup({
    name:new FormControl('', [Validators.required]),
    email:new FormControl('', [Validators.required]),
    phone:new FormControl('', [Validators.required]),
    attach:new FormControl('',[Validators.required])
  })
  ngOnInit(): void {
    this.modal= new window.bootstrap.Modal(
      document.getElementById("modal")
    );
  }

  openModal(){
    this.modal.show();
    this.contact.reset()
  }

  closeModal(){
    this.modal.hide()
  }

  contactform(){
    console.log(this.contact.value)
  }

  get signinControl() {
    return this.contact.controls
  }
  
  addUser(){
    localStorage.setItem('addUser', JSON.stringify(this.contact.value))
    this.name=this.contact.value.name;
    this.email=this.contact.value.email;
    this.phone=this.contact.value.phone;
    this.attach=this.contact.value.attach
    this.modal.hide();
    this.showCard=true;
  }
  edit(){
    this.modal.show()
    this.name = this.contact.value.name;
    this.email = this.contact.value.email;
    this.phone = this.contact.value.phone;
    this.attach = this.contact.value.attach
  }
  dlt(){
    localStorage.removeItem('addUser');
    this.showCard=false;
    this.contact.reset()
  }
}
