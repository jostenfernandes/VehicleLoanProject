import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomepageComponent } from './homepage/homepage.component';
import { FooterComponent } from './footer/footer.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { LoginComponent } from './login/login.component';
import { NewregiformComponent } from './newregiform/newregiform.component';
import { ShowregiformComponent } from './showregiform/showregiform.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { ApplyLoanPageComponent } from './apply-loan-page/apply-loan-page.component';
import { CheckeligibilityComponent } from './checkeligibility/checkeligibility.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomepageComponent,
    FooterComponent,
    AboutUsComponent,
    LoginComponent,
    NewregiformComponent,
    ShowregiformComponent,
    AdminloginComponent,
    ApplyLoanPageComponent,
    CheckeligibilityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
