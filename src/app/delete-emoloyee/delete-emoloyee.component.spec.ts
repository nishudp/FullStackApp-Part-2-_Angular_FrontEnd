import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteEmoloyeeComponent } from './delete-emoloyee.component';

describe('DeleteEmoloyeeComponent', () => {
  let component: DeleteEmoloyeeComponent;
  let fixture: ComponentFixture<DeleteEmoloyeeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteEmoloyeeComponent]
    });
    fixture = TestBed.createComponent(DeleteEmoloyeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
