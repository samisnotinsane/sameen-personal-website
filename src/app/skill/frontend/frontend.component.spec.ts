import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontendComponent } from './frontend.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('FrontendComponent', () => {
  let component: FrontendComponent;
  let fixture: ComponentFixture<FrontendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        FrontendComponent
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrontendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
