import { Component, OnInit } from '@angular/core';
import { DetailsService } from 'src/app/details.service';

@Component({
  selector: 'app-show-loan-details',
  templateUrl: './show-loan-details.component.html',
  styleUrls: ['./show-loan-details.component.css']
})
export class ShowLoanDetailsComponent implements OnInit {

  constructor(private vhs:DetailsService) { }
  loanList:any;

  ngOnInit(): void 
  {
    this.vhs.getAllLoanDetails().subscribe(
      (data)=>{
        this.loanList=data;
        console.log(data);
      },
      (error)=>
      {
        console.log(error);  
      }
    )
  }

}
