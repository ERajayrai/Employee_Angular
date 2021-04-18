import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurdEmployeeComponent } from './curd-employee.component';

describe('CurdEmployeeComponent', () => {
  let component: CurdEmployeeComponent;
  let fixture: ComponentFixture<CurdEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurdEmployeeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurdEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
