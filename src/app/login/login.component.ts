import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegiformService } from '../regiform.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  msg = " ";
  sucessMsg = " ";

  constructor(private bhs: RegiformService,private myrouter:Router) { }

  ngOnInit(): void {
  }

  loginValues:any;
  loginValid:any;
  validateLogin(loginForm:any)
  {
    console.log(loginForm.value);
    this.loginValues=loginForm.value;
    console.log(this.loginValues);
    
    this.bhs.validateLogin(this.loginValues).subscribe(
      (data)=>{
        console.log(data);
        this.loginValid=data;
        if(this.loginValid)
        {
          localStorage.setItem("email",this.loginValues.email);
          //this.sucessMsg = "User loginned successfully..!"
                this.myrouter.navigate(['applyloan']);
               // alert("logined success");
                
        }
        else
        {
          // alert("User Invalid");
          this.msg = "Bad credentials please enter valid emailid and password";
        }
      }
    )
     
      }

}
