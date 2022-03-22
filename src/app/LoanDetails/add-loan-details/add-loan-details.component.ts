import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoanDetails } from 'src/app/details';
import { DetailsService } from 'src/app/details.service';

@Component({
  selector: 'app-add-loan-details',
  templateUrl: './add-loan-details.component.html',
  styleUrls: ['./add-loan-details.component.css']
})
export class AddLoanDetailsComponent implements OnInit {

  constructor(private vhs: DetailsService, private myrouter: Router) { }

  appId: any;

  loanDetails(item:any)
  {
    console.warn(item);
    
  }

  loan:LoanDetails = new LoanDetails();

  saveLoan(loanForm:any)
  {
    this.loan = loanForm.value;
    console.log(this.loan);
    this.appId = localStorage.getItem("appid");
    this.vhs.addLoanDetails(this.appId,this.loan).subscribe(
      (data)=>{
        console.log(data);
        alert("Loan Details added and application form submitted successfully....!")
        // window.confirm("Loan Details Added");
        this.myrouter.navigate(['\adddetails']);
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
