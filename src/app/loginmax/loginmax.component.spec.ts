import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginmaxComponent } from './loginmax.component';

describe('LoginmaxComponent', () => {
  let component: LoginmaxComponent;
  let fixture: ComponentFixture<LoginmaxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginmaxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginmaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
