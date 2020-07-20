import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-general-form',
  templateUrl: './general-form.component.html',
  styleUrls: ['./general-form.component.scss']
})
export class GeneralFormComponent implements OnInit {
@ViewChild ('form') generalForm:NgForm;

  user={
    name:'',
    company:'',
    position:'',
    department:'',
    phone:'',
    mobile:'',
    website:'',
    skype:'',
    email:'',
    address:''
  };
  submitted=false;

  constructor() { }

  ngOnInit(): void {
  }
 onSubmit(){
   this.submitted=true;
   this.user.name=this.generalForm.value.name;
   this.user.company=this.generalForm.value.company;
   this.user.position=this.generalForm.value.position;
   this.user.department=this.generalForm.value.department;
   this.user.phone=this.generalForm.value.phone;
   this.user.mobile=this.generalForm.value.mobile;
   this.user.website=this.generalForm.value.website;
   this.user.skype=this.generalForm.value.skype;
   this.user.email=this.generalForm.value.email;
   this.user.address=this.generalForm.value.address;
   console.log(this.generalForm);
   this.generalForm.reset();
   
 }
}
