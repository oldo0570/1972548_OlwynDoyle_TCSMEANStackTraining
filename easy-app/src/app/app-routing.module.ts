import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { RegistrationComponent } from './registration/registration.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { LoginComponent } from './login/login.component';
import { MyAuthGaurd } from './myauthgaurd';

const routes: Routes = [
  { path: "\login", component: LoginComponent },
  { path: "\registration", component: RegistrationComponent },
  { path: "\portfolio", component: PortfolioComponent, canActivate: [MyAuthGaurd] },
  { path: "", redirectTo: "\registration", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
