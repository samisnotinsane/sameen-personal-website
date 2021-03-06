import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BigdataComponent } from './bigdata.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('BigdataComponent', () => {
  let component: BigdataComponent;
  let fixture: ComponentFixture<BigdataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        BigdataComponent
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BigdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
