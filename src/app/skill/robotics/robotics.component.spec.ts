import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoboticsComponent } from './robotics.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('RoboticsComponent', () => {
  let component: RoboticsComponent;
  let fixture: ComponentFixture<RoboticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoboticsComponent ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoboticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
