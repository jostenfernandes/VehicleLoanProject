import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { LoginComponent } from './login/login.component';
import { NewregiformComponent } from './newregiform/newregiform.component';
import { ShowregiformComponent } from './showregiform/showregiform.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { ApplyLoanPageComponent } from './apply-loan-page/apply-loan-page.component';
import { CheckeligibilityComponent } from './checkeligibility/checkeligibility.component';

const routes: Routes = [
  {path: '', component: HomepageComponent},
  {path: 'aboutus', component: AboutUsComponent},
  {path: 'login', component: LoginComponent},
  {path: 'newregistration', component: NewregiformComponent},
  {path: 'addform', component: NewregiformComponent},
  {path: 'showallforms', component: ShowregiformComponent},
  {path: 'login', component: LoginComponent},
  {path: 'adminlogin', component: AdminloginComponent},
  {path: 'applyloan', component: ApplyLoanPageComponent},
  {path: 'checkeligibility', component: CheckeligibilityComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
