import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GeneralFormComponent } from './general-form/general-form.component';
import { AppComponent } from './app.component';


const routes: Routes = [
  { path: 'basicDetails', component: GeneralFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
