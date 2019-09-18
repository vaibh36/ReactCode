import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupmaxComponent } from './signupmax.component';

describe('SignupmaxComponent', () => {
  let component: SignupmaxComponent;
  let fixture: ComponentFixture<SignupmaxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupmaxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupmaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
