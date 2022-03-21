import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegiformService } from '../regiform.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {

  constructor(private phs: RegiformService, private myrouter:Router) { }

  ngOnInit(): void {
  }

  loginValues:any;
  loginValid:any;

  validateLogin(loginForm:any)
  {
    console.log(loginForm.value);
    this.loginValues=loginForm.value;
    console.log(this.loginValues);
    
    this.phs.validateAdminLogin(this.loginValues).subscribe(
      (data)=>
      {
          console.log(data);
          this.loginValid=data;
          if(this.loginValid)
            {
                localStorage.setItem("email",this.loginValues.email);
                alert("Admin Logined Successfully");
                this.myrouter.navigate(['\showallforms']);
            }
            else
            {
              alert("Invalid Admin Login");
            }
      }
    )
  }

}
