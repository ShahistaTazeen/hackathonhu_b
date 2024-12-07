import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SucessfulComponent } from './sucessful.component';

describe('SucessfulComponent', () => {
  let component: SucessfulComponent;
  let fixture: ComponentFixture<SucessfulComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SucessfulComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SucessfulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
