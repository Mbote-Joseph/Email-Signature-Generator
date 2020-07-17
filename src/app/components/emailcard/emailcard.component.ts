import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emailcard',
  templateUrl: './emailcard.component.html',
  styleUrls: ['./emailcard.component.scss']
})
export class EmailcardComponent implements OnInit {

  name:  string = "Joseph Mbote";
  email: string= "Mbotejoseph001@gmail.com";
  mobile: string="0792622515";
  constructor() { }

  ngOnInit(): void {
  }
  

}
