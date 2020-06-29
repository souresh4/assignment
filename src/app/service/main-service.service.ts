import { Injectable } from '@angular/core';
import { Observable, Subject, Observer } from 'rxjs';
import { validateHorizontalPosition } from '@angular/cdk/overlay';
@Injectable({
  providedIn: 'root'
})
export class MainServiceService {
  private randomnumber: Observable<number>;
  private servicecallcount = 0;
  constructor() { }
  getrandomnumber() {
    this.servicecallcount++;
    if (!this.randomnumber) {
      this.randomnumber = new Observable((subject: Observer<number>) => {
        setInterval(() => {
          const randnumber = (Math.floor(Math.random() * 10) - 1) * (Math.floor(Math.random() * 30) + 1);
          subject.next(randnumber);
        }, 3000);
      });
    }
    return this.randomnumber;

  }

  getrandomnumberpromise() {
    let cn = 0;
    cn = (Math.floor(Math.random() * 10) - 1) * (Math.floor(Math.random() * 30) + 1);
    return cn;

  }
  getservicecallcount() {
    return this.servicecallcount;
  }
  getsquarevalue(val: number): Observable<number> {
    const squarenumber = new Observable((subject: Observer<number>) => {
      setTimeout(() => {
        const sqn = val * val;
        subject.next(sqn);
      }, 500);

    });
    return squarenumber;
  }
}
