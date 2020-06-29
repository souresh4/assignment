import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { environment } from '../../../environments/environment.souresh';
import { MetaserviceService } from '../../service/metaservice.service';
@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.css']
})
export class StepperComponent implements OnInit {
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  public soureshEnvironment : any;
  constructor(private fb: FormBuilder,public metaService : MetaserviceService) {
    this.firstFormGroup = this.fb.group({
      full_name: ['', Validators.required]
    });
    this.secondFormGroup = this.fb.group({
      address: ['', Validators.required]
    });
   this.soureshEnvironment = environment.environmentName;
   //this object is for metaService
   const data: object = {
    title: 'Souresh Assignment',
    og_url: 'http://dna-backend.influxiq.com/ ',
    og_type: 'blog',
    og_title: 'Angular Example 1'
  };
  this.metaService.setmeta(data);

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
