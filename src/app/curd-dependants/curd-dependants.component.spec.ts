import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurdDependantsComponent } from './curd-dependants.component';

describe('CurdDependantsComponent', () => {
  let component: CurdDependantsComponent;
  let fixture: ComponentFixture<CurdDependantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurdDependantsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurdDependantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
