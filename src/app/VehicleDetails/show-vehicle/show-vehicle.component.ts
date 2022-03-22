import { Component, OnInit } from '@angular/core';
import { DetailsService } from 'src/app/details.service';


@Component({
  selector: 'app-show-vehicle',
  templateUrl: './show-vehicle.component.html',
  styleUrls: ['./show-vehicle.component.css']
})
export class ShowVehicleComponent implements OnInit {

  constructor(private vhs:DetailsService) { }
  vehicleList:any;

  ngOnInit(): void 
  {
    this.vhs.getAllVehicleDetails().subscribe(
      (data)=>{
        console.log(data);
        this.vehicleList = data;
      },
      (error)=>
      {
        console.log(error);
      }
    )
  }

}
