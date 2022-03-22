import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DetailsComponent } from './details/details.component';
import { AddDetailsComponent } from './add-details/add-details.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { AddEmpolyeeComponent } from './Employment_Details/add-employee/add-empolyee.component';
import { ShowEmployeeComponent } from './Employment_Details/showEmployee/show-employee.component';
import { AddVehicleComponent } from './VehicleDetails/add-vehicle/add-vehicle.component';
import { ShowVehicleComponent } from './VehicleDetails/show-vehicle/show-vehicle.component';
import { EMIcalculatorComponent } from './emicalculator/emicalculator.component';
import { AddLoanDetailsComponent } from './LoanDetails/add-loan-details/add-loan-details.component';
import { ShowLoanDetailsComponent } from './LoanDetails/show-loan-details/show-loan-details.component';
import { IdentityDetailsComponent } from './identity-details/identity-details.component';


@NgModule({
  declarations: [
    AppComponent,
    DetailsComponent,
    AddDetailsComponent,
    AddEmpolyeeComponent,
    ShowEmployeeComponent,
    AddVehicleComponent,
    ShowVehicleComponent,
    EMIcalculatorComponent,
    AddLoanDetailsComponent,
    ShowLoanDetailsComponent,
    IdentityDetailsComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
