import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StepperComponent } from './component/stepper/stepper.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DemoMaterialModule } from './materialModule';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GridexampleComponent } from './component/gridexample/gridexample.component';
import { CustomPipe } from './pipe/custom.pipe';


@NgModule({
  declarations: [
    AppComponent,
    StepperComponent,
    GridexampleComponent,
    CustomPipe
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    BrowserAnimationsModule,
    DemoMaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [CustomPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
