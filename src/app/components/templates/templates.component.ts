import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/user.service';
import {User} from '../../user.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-templates',
  templateUrl: './templates.component.html',
  styleUrls: ['./templates.component.scss']
})
export class TemplatesComponent implements OnInit {
  Users: User[] = [];
  
  constructor(private userService: UserService) { 
   
  }

  ngOnInit(){
    
    this.userService.fetchUser().subscribe(posts=>{
      this.Users=posts;
    });
    
  }
  
   onfetchPosts(){
    this.userService.fetchUser().subscribe(posts=>{
      this.Users=posts;
    });
   }
  
      
    
}
