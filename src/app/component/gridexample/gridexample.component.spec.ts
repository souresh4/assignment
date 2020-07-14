import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridexampleComponent } from './gridexample.component';

describe('GridexampleComponent', () => {
  let component: GridexampleComponent;
  let fixture: ComponentFixture<GridexampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridexampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridexampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
