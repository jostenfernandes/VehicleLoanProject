import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VehicleDetails } from 'src/app/details';
import { DetailsService } from 'src/app/details.service';

@Component({
  selector: 'app-add-vehicle',
  templateUrl: './add-vehicle.component.html',
  styleUrls: ['./add-vehicle.component.css']
})
export class AddVehicleComponent implements OnInit {

  constructor(private vhs:DetailsService, private myrouter: Router) { }

  appId: any;

  vehicle:VehicleDetails = new VehicleDetails();

  employmentDetails(item:any)
  {
    console.warn(item);
    
  }

  saveVehicle(vehicleForm:any)
  {
    this.vehicle = vehicleForm.value;
    console.log(this.vehicle);
    this.appId = localStorage.getItem("appid");
    this.vhs.addVehicleDetails(this.appId,this.vehicle).subscribe(
      (data)=>{
        console.log(data);
        alert("Vehicle details added...")
        this.myrouter.navigate(['\addLoanDetails']);
      },
      (error)=>
      {
        console.log(error);
      }
    )
    
  }

  ngOnInit(): void {
    this.appId;
  }

}
