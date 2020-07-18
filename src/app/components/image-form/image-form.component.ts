import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-image-form',
  templateUrl: './image-form.component.html',
  styleUrls: ['./image-form.component.scss']
})
export class ImageFormComponent implements OnInit {
  @ViewChild ('form') linksForm:NgForm;
  constructor() { }

  ngOnInit(): void {
  }
 onSubmit(){
   console.log(this.linksForm);
 }
}

