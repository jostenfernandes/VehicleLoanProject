import { APP_ID, Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Details, EmploymentDetails } from 'src/app/details';
import { DetailsService } from 'src/app/details.service';

@Component({
  selector: 'app-add-empolyee',
  templateUrl: './add-empolyee.component.html',
  styleUrls: ['./add-empolyee.component.css']
})
export class AddEmpolyeeComponent implements OnInit {

  constructor(private vhs:DetailsService, private myrouter: Router) { }

  appId: any;

  employment:EmploymentDetails = new EmploymentDetails;


  employmentDetails(item:any)
  {
    console.warn(item);
    
  }

  saveDetail(employmentForm:any)
  {
    this.employment=employmentForm.value;
    console.log(this.employment);
    this.appId = localStorage.getItem("appid");
    this.vhs.addEmploymentDetails(this.appId,this.employment).subscribe(
      (data)=>{
        console.log(data);
        alert("employment Details added....")
        this.myrouter.navigate(['\addVehicle']);
      },
      (error)=>
      {console.log(error);}
    )


  }



  ngOnInit(): void {
    this.appId;
  }

}
