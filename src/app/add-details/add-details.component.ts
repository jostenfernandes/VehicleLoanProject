import { Component, OnInit } from '@angular/core';
import { Details } from '../details';
import { Router } from '@angular/router';
import { DetailsService } from '../details.service';

@Component({
  selector: 'app-add-details',
  templateUrl: './add-details.component.html',
  styleUrls: ['./add-details.component.css']
})
export class AddDetailsComponent implements OnInit {

  constructor(private vhs:DetailsService, private myrouter:Router) { }

  ngOnInit(): void {
  }

  details:Details = new Details();

  personelDetails(item:any)
  {
    console.warn(item);
    
  }

  appData: any;

  saveDetail(detailForm:any)
  {
    this.details= detailForm.value;
    console.log(this.details);
    this.vhs.addDetails(this.details).subscribe(
      (data)=>{
        console.log(data);
        this.appData=data;
        localStorage.setItem("appid", this.appData.appid);
        alert("Personel Details Added....");
        this.myrouter.navigate(['\addEmployee']);
      },
      (error)=>
      {console.log(error);
      }
    )
    
  }

}
