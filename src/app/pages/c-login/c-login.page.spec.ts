import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CLoginPage } from './c-login.page';

describe('CLoginPage', () => {
  let component: CLoginPage;
  let fixture: ComponentFixture<CLoginPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CLoginPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CLoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
