import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisteredstudentsComponent } from './registeredstudents.component';

describe('RegisteredstudentsComponent', () => {
  let component: RegisteredstudentsComponent;
  let fixture: ComponentFixture<RegisteredstudentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegisteredstudentsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisteredstudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
