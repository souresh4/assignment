import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { environment } from '../../../environments/environment.souresh';
import { MetaserviceService } from '../../service/metaservice.service';
import { MainServiceService } from '../../service/main-service.service';
import { Subscription, ReplaySubject } from 'rxjs';
import { takeUntil, take } from 'rxjs/operators';
@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.css']
})
export class StepperComponent implements OnInit {
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  public soureshEnvironment: any;
  //Promise And Observable 
  public randomnumber: Array<object> = [];
  public randomnumberone: Array<object> = [];
  public lastexecutedtime = 0;
  public servicecallcount = 0;
  private unsubscribe: ReplaySubject<boolean> = new ReplaySubject(1);

  constructor(private fb: FormBuilder, public metaService: MetaserviceService, public service: MainServiceService) {
    this.firstFormGroup = this.fb.group({
      full_name: ['', Validators.required]
    });
    this.secondFormGroup = this.fb.group({
      address: ['', Validators.required]
    });
    this.soureshEnvironment = environment.environmentName;
    // this object is for metaService
    const data: object = {
      title: 'Souresh Assignment',
      og_url: 'http://dna-backend.influxiq.com/ ',
      og_type: 'blog',
      og_title: 'Angular Example 1'
    };
    this.metaService.setmeta(data);

  }

  ngOnInit() {
    //For Promise and observable 
    this.service.getrandomnumber().pipe(takeUntil(this.unsubscribe)).subscribe((rand: number) => {
      const lastexecutedtime: number = Date.now();
      const p = 9;
      this.randomnumber.push({
        randnumber: rand,
        lastexecutedtime,
        executiongap: lastexecutedtime - this.lastexecutedtime
      });
      this.lastexecutedtime = lastexecutedtime;
      console.log(`observable Value  ${rand}`);
    });


    new Promise((resolve, reject) => {
      resolve(this.service.getrandomnumberpromise());
    }
    ).then((rand: number) => {
      this.randomnumberone.push({
        randnumber: rand,

      });
    }
    ).catch((err) => {
      this.randomnumberone = [];
    });
    this.servicecallcount = this.service.getservicecallcount();
  }
  ngOnDestroy() {
    this.unsubscribe.next(true);
    this.unsubscribe.complete();
  }

  inputUntouch(form: any, val: any) {
    form.controls[val].markAsUntouched();
  }

  firstFormSubmit(value: any) {
    switch (value) {
      case 'firstForm':
        for (const x in this.firstFormGroup.controls) {
          this.firstFormGroup.controls[x].markAsTouched();
        }
        break;

      case 'secondForm':
        for (const x in this.secondFormGroup.controls) {
          this.secondFormGroup.controls[x].markAsTouched();
        }
        break;

      default:
        break;
    }
  }

}
