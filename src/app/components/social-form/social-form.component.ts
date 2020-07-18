import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-social-form',
  templateUrl: './social-form.component.html',
  styleUrls: ['./social-form.component.scss']
})
export class SocialFormComponent implements OnInit {
  @ViewChild ('form') generalForm:NgForm;
  constructor() { }

  ngOnInit(): void {
  }
 onSubmit(){
   console.log(this.generalForm);
 }
}
