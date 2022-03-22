import { Component, OnInit } from '@angular/core';
import { DetailsService } from 'src/app/details.service';

@Component({
  selector: 'app-show-employee',
  templateUrl: './show-employee.component.html',
  styleUrls: ['./show-employee.component.css']
})
export class ShowEmployeeComponent implements OnInit {

  constructor(private ehs: DetailsService) { }
  employeeList: any;

  ngOnInit(): void 
  {
    this.ehs.getAllEmploymentDetails().subscribe(
      (data)=>{
        console.log(data);
        this.employeeList = data;
      },
      (error)=>
      {
        console.log(error);
      }
    )

  }

}
