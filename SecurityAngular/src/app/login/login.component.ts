import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { url } from 'inspector';
import { Role } from '../models/role';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  Role = Role;
  uName:string="user1256";
  uPwd:string="user@1256";
  uRole:string="user";
  aName:string="admin";
  aPwd:string="admin@1256";
  aRole:string="admin";

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
  }
  onSubmit(data){
    if(data.Role=="user")
    {
      if(data.Email==this.uName && data.pwd==this.uPwd){
        //login(Role.User)
        //document.location
       // location. replace("") 
       this.router.navigate(['/']);
      }
      else{
        alert("Invalid Id Or Password");
      }
    }else{
      if(data.Email==this.aName && data.pwd==this.aPwd){
        
       // this.authService.login(role);
       this.router.navigate(['/admin']);
      
      }
      else{
        document.write("Invalid");
      }
    }
  }
  login(role: Role) {
    this.authService.login(role);
    this.router.navigate(['/']);
  }  
  logout() {
    this.authService.logout();
  }
}