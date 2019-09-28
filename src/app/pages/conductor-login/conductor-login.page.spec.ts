import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConductorLoginPage } from './conductor-login.page';

describe('ConductorLoginPage', () => {
  let component: ConductorLoginPage;
  let fixture: ComponentFixture<ConductorLoginPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConductorLoginPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConductorLoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
