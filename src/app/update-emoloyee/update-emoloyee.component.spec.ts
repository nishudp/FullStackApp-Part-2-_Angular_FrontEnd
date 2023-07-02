import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateEmoloyeeComponent } from './update-emoloyee.component';

describe('UpdateEmoloyeeComponent', () => {
  let component: UpdateEmoloyeeComponent;
  let fixture: ComponentFixture<UpdateEmoloyeeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateEmoloyeeComponent]
    });
    fixture = TestBed.createComponent(UpdateEmoloyeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
