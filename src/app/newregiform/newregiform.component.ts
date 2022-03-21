import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Regiform } from '../regiform';
import { RegiformService } from '../regiform.service';

@Component({
  selector: 'app-newregiform',
  templateUrl: './newregiform.component.html',
  styleUrls: ['./newregiform.component.css']
})
export class NewregiformComponent implements OnInit {

  constructor(private rhs: RegiformService,private myrouter:Router) { }

  ngOnInit(): void {
  }

  regiform:Regiform = new Regiform();

  registrationDetails(item:any)
  {
    console.warn(item);
    
  }

  saveRegiform(regiformForm:any)
  {
    this.regiform = regiformForm.value;
    console.log(this.regiform);
    this.rhs.addRegiform(this.regiform).subscribe(
      (data)=>{
        console.log(data);
        this.myrouter.navigate(['\login']);
        alert("Registered succesfully...!") 
      },
      (error)=>
      {
        console.log(error);
        
      }
    )
    
  }

}
