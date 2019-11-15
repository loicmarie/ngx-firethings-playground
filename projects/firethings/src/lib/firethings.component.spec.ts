import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirethingsComponent } from './firethings.component';

describe('FirethingsComponent', () => {
  let component: FirethingsComponent;
  let fixture: ComponentFixture<FirethingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirethingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirethingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
