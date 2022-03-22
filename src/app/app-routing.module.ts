import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDetailsComponent } from './add-details/add-details.component';
import { DetailsComponent } from './details/details.component';
import { AddEmpolyeeComponent } from './Employment_Details/add-employee/add-empolyee.component';
import { ShowEmployeeComponent } from './Employment_Details/showEmployee/show-employee.component';
import { AddLoanDetailsComponent } from './LoanDetails/add-loan-details/add-loan-details.component';
import { ShowLoanDetailsComponent } from './LoanDetails/show-loan-details/show-loan-details.component';
import { AddVehicleComponent } from './VehicleDetails/add-vehicle/add-vehicle.component';
import { ShowVehicleComponent } from './VehicleDetails/show-vehicle/show-vehicle.component';

const routes: Routes = [
  {path: 'adddetails', component: AddDetailsComponent},
  {path: 'showall', component: DetailsComponent},
  {path: 'addEmployee', component: AddEmpolyeeComponent},
  {path: 'showEmployee', component: ShowEmployeeComponent},
  {path: 'addVehicle', component: AddVehicleComponent},
  {path: 'showVehicle', component: ShowVehicleComponent},
  {path: 'addLoanDetails', component: AddLoanDetailsComponent},
  {path: 'showLoanDetails', component: ShowLoanDetailsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
