import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonnelComponent } from './personnel.component';

describe('PersonnelComponent', () => {
  let component: PersonnelComponent;
  let fixture: ComponentFixture<PersonnelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PersonnelComponent]
    });
    fixture = TestBed.createComponent(PersonnelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
