import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurdEducationComponent } from './curd-education.component';

describe('CurdEducationComponent', () => {
  let component: CurdEducationComponent;
  let fixture: ComponentFixture<CurdEducationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurdEducationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurdEducationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
