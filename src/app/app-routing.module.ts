import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StepperComponent } from './component/stepper/stepper.component';
import { GridexampleComponent } from './component/gridexample/gridexample.component';
const routes: Routes = [
  {
     path : '' , component : StepperComponent
  },
  {
    path : 'grid-example' , component : GridexampleComponent
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
