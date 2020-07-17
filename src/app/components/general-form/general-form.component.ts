import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-general-form',
  templateUrl: './general-form.component.html',
  styleUrls: ['./general-form.component.scss']
})
export class GeneralFormComponent implements OnInit {
@ViewChild ('form') generalForm:NgForm;
  constructor() { }

  ngOnInit(): void {
  }
 onSubmit(){
   console.log(this.generalForm);
 }
}
