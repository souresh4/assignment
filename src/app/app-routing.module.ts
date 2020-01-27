import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StepperComponent } from './component/stepper/stepper.component';

const routes: Routes = [
  {
     path : 'steeper' , component : StepperComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
