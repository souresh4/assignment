import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { environment } from '../../../environments/environment.souresh';
@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.css']
})
export class StepperComponent implements OnInit {
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  public soureshEnvironment : any;
  constructor(private fb: FormBuilder) {
    this.firstFormGroup = this.fb.group({
      full_name: ['', Validators.required]
    });
    this.secondFormGroup = this.fb.group({
      address: ['', Validators.required]
    });
   this.soureshEnvironment = environment.environmentName;
   console.log("testing====",this.soureshEnvironment);

  }

  ngOnInit() {
  }
  inputUntouch(form: any, val: any) {
    form.controls[val].markAsUntouched();
  }

  firstFormSubmit(value: any) {
    switch (value) {
      case 'firstForm':
        for (let x in this.firstFormGroup.controls) {
          this.firstFormGroup.controls[x].markAsTouched();
        }
        break;

      case 'secondForm':
        for (let x in this.secondFormGroup.controls) {
          this.secondFormGroup.controls[x].markAsTouched();
        }
        break;

      default:
        break;
    }
  }

}
