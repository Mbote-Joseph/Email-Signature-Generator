import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-templates',
  templateUrl: './templates.component.html',
  styleUrls: ['./templates.component.scss']
})
export class TemplatesComponent implements OnInit {
  name:  string = "Joseph Mbote";
  email: string= "Mbotejoseph001@gmail.com";
  mobile: string="0792622515";
  constructor() { }

  ngOnInit(): void {
  }

}
