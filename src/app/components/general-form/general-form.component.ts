import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/shared/user.service';
import { User } from 'src/app/user.model';

@Component({
  selector: 'app-general-form',
  templateUrl: './general-form.component.html',
  styleUrls: ['./general-form.component.scss']
})
export class GeneralFormComponent implements OnInit {
@ViewChild ('form') generalForm:NgForm;

  users: User[] = [];
  submitted=false;

  constructor(private userService: UserService) { }

  ngOnInit(){
    this.userService.fetchUser().subscribe(posts=>{
      this.users=posts;
    });
    
  }
 onSubmit(userData: User){
  this.userService.createUser(userData.name, userData.company, userData.position, userData.department, userData.phone, userData.mobile, userData.website, userData.skype, userData.email, userData.address);
   //console.log(this.generalForm);
   this.generalForm.reset();
   
 }
 onfetchPosts(){
  this.userService.fetchUser().subscribe(posts=>{
    this.users=posts;
  });
 }
 onClearUsers(){
   this.userService.deleteUser().subscribe(()=>{
     this.users=[];
   })
 }
}
