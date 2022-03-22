import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Details, EmploymentDetails, VehicleDetails, LoanDetails } from './details';

@Injectable({
  providedIn: 'root'
})
export class DetailsService {

  constructor(private myhttp:HttpClient) { }

  restUrl: string = "http://localhost:9083/rest/api";

  //Personal Details
  getAllDetails()
  {
    return this.myhttp.get(this.restUrl+"/personel")
  }

  addDetails(det:Details)
  {
    return this.myhttp.post(this.restUrl+"/personel", det)
  }


  //Employment Details
   getAllEmploymentDetails()
   {
     return this.myhttp.get(this.restUrl+"/employment")
   }

  //  addEmploymentDetails(det:EmploymentDetails)
  //  {
  //    return this.myhttp.post(this.restUrl+"/employment/", det)
  //  }

    addEmploymentDetails(srchId:any, Employment:any)
   {
     return this.myhttp.post(this.restUrl+"/employment/"+ srchId, Employment)
   }


  //Vehicle Details
  getAllVehicleDetails()
   {
     return this.myhttp.get(this.restUrl+"/vehicle")
   }

   addVehicleDetails(srchId:any, Vehicle:any)
   {
     return this.myhttp.post(this.restUrl+"/vehicle/"+ srchId, Vehicle)
   }

   //Loan Details
   getAllLoanDetails()
   {
     return this.myhttp.get(this.restUrl+"/loan")
   }

   addLoanDetails(srchId:any, Loan:any)
   {
     return this.myhttp.post(this.restUrl+"/loan/"+ srchId, Loan)
   }




}
