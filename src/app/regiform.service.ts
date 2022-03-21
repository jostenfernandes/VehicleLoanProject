import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Regiform } from './regiform';

@Injectable({
  providedIn: 'root'
})
export class RegiformService {

  constructor(private myhttp:HttpClient) { }

  restUrl: string ="http://localhost:9092/rest/api";

  getAllRegiform()
  {
    return this.myhttp.get(this.restUrl+"/registrationform")
  }

  addRegiform(veh:Regiform)
  {
    return this.myhttp.post(this.restUrl+"/registrationform",veh)
  }

  validateLogin(loginValues:any)
  {
    return this.myhttp.get(this.restUrl+"/validatelogin/"+loginValues.email+"/"+loginValues.password)
  }

  validateAdminLogin(loginValues:any)
  {
    return this.myhttp.get(this.restUrl+"/loan/"+loginValues.email+"/"+loginValues.password);
  }

}
