import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfrereComponent } from './confrere.component';

describe('ConfrereComponent', () => {
  let component: ConfrereComponent;
  let fixture: ComponentFixture<ConfrereComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConfrereComponent]
    });
    fixture = TestBed.createComponent(ConfrereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
