import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ResultscomponentComponent } from './resultscomponent/resultscomponent.component';
import { TestcomponentComponent } from './testcomponent/testcomponent.component';
import { MyAuthGaurd } from './myauthgaurd';


const routes: Routes = [
  { path: "test", component: TestcomponentComponent },
  { path: "test2", component: ResultscomponentComponent, canActivate: [MyAuthGaurd] },
  { path: "", redirectTo: "test", pathMatch:"full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
